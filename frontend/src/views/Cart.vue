<template>
    <section>
        <div class="small-container cart-page">
            <h1 class="cart-title" style="font-size: 50px;">Sách mượn của tôi</h1>
            <div v-if="quantity.length != 0">
                <table class="cart-table" >
                    <thead>
                        <tr>
                            <th>Sách</th>
                            <th>Ngày mượn</th>
                            <th class="ngày hết hạn" style="font-size: 25px; text-align: center">Ngày hết hạn</th>
                            <th class="buttondelete" style="font-size: 25px; text-align: center">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, index) in cart.prdId" :key="i._id">
                            <td>
                                <div class="cart-info">
                                    <img :src="i.PrdImage" alt="Product Image">
                                    <div class="product-details">
                                        <p><b>{{ i.productName }}</b></p>
                                        <p>{{ i.author }}
                                        </p>
                                        <br>
                                        <!-- <a href="" class="remove" @click.prevent="deleteItem(index)">Remove</a> -->
                                    </div>
                                </div>
                            </td>
                            <!-- <td>
                                <input class="form-control quantity-input" type="number" v-model="quantity[index]" min="0" max="200" @change="updateItem">
                            </td> -->
                            <td class="current-date" style="font-size: 20px;">{{ currentDate }}</td>

                            <td class="expired-date" style="font-size: 20px; text-align: center;">{{ getExpiryDate(index) }}</td>
                            <td class="remove-button"><button class="btn btn-danger"
                                    @click.prevent="deleteItem(index)">Xóa</button></td>
                        </tr>
                    </tbody>
                </table>

                <div class="d-flex justify-content-center">
                    <button class="btn btn-success" style="font-size: 20px;" @click="createOrder">Đặt Mượn</button>
                </div>
            </div>
            <div class="card-body" style="text-align: center;" v-else>
                <h3>Giỏ sách trống!</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from "vue-router"
import Axios from '../services/service'
const router = useRouter()

// Kiểm tra xem người dùng đã đăng nhập chưa
if (localStorage.isLogin !== 'user') {
    alert("Vui lòng Đăng Nhập Tài Khoản Khách Hàng")
    router.push('/login')
}

const cart = ref()
const quantity = ref([])
const expiryDate = ref([])
const userid = JSON.parse(localStorage.info)._id

async function getCart() {
    cart.value = await Axios.getCart(userid)
    quantity.value = cart.value.quantity
    // Khởi tạo mảng ngày hết hạn với giá trị mặc định là ngày hiện tại
    expiryDate.value = Array(cart.value.prdId.length).fill(getExpiryDate())
}
getCart()

const total = computed(() => {
    return quantity.value.reduce((account, value, index) => {
        return account + value * cart.value.prdId[index].price
    }, 0)
})

async function updateItem(index) {
    if (quantity.value[index] === 0)
        deleteItem(index)
    else await Axios.updateCart(userid, { quantity: quantity.value })
}

async function deleteItem(index) {
    const newPrd = cart.value.prdId.filter((value, index1) => index1 != index)
    const newQuantity = quantity.value.filter((value, index2) => index2 != index)
    await Axios.updateCart(userid, { prdId: newPrd, quantity: newQuantity })
    getCart()
}

async function clearCart() {
    const newPrd = []
    const newQuantity = []
    await Axios.updateCart(userid, { prdId: newPrd, quantity: newQuantity })
    getCart()
}

function getTime() {
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    return `${date}-${month}-${year}`
}

// Hàm tính ngày hết hạn sau 14 ngày từ ngày mượn
function getExpiryDate() {
    const today = new Date()
    const expiry = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000) // Thêm 14 ngày
    const date = expiry.getDate()
    const month = expiry.getMonth() + 1
    const year = expiry.getFullYear()
    return `${date}-${month}-${year}`
}

const currentDate = ref(getTime())
const newOrder = ref()

async function createOrder() {
    newOrder.value = {
        info: {
            "UID": userid,
            "SID": -1,
            "status": 1,
            "createDate": currentDate.value,
            
        },
        detail: {
            prdId: cart.value.prdId,
            
            expiryDate: expiryDate.value
        }
    }
    await Axios.createOrder(newOrder.value.info, newOrder.value.detail)
    await clearCart()
    alert('Đặt mượn thành công')
    router.push(`/myorder/${userid}`)
}

</script>

<style scoped>
.cart-page {
    padding-top: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}

.cart-page h1 {
    text-align: center;
    font-size: 30px;
    padding: 10px;
    
}

.cart-table {
    width: 100%;
    border-collapse: collapse
    ;
}

.cart-table th {
    text-align: left;
    padding: 10px;
    color: #fff;
    background: rgb(9, 111, 48);
    font-weight: normal;
    font-size: 25px;
}

.cart-table td {
    padding: 15px;
}

.cart-info {
    display: flex;
    align-items: center;
}

.cart-info img {
    width: 90px;
    height: 120px;
    margin-right: 10px;
}

.product-details p {
    font-size: 18px;
    margin-bottom: 5px;
}

.remove-button {
    text-align: center;
}

.remove-button button {
    font-size: 16px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid rgb(3, 170, 212);
    width: 100%;
    max-width: 400px;
}

.total-price td:last-child {
    text-align: right;
}

.d-flex {
    display: flex;
}

.justify-content-center {
    justify-content: center;
}

.date {
    font-size: 30px;
}



.expiry-date {
    width: 157px;
    /* Điều chỉnh độ rộng của ô input ngày hết hạn */
    height: 30px;
    /* Điều chỉnh chiều cao của ô input ngày hết hạn */
    font-size: 30px;
    /* Điều chỉnh kích thước của font ngày hết hạn */
    padding: 5px;
    /* Điều chỉnh khoảng cách giữa nội dung và viền của ô input ngày hết hạn */
}
</style>
