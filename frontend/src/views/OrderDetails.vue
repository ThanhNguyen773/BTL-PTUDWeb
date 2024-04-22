<template>
    <section class="details" style="padding-top: 10%; margin-right: 10%  ;margin-left: 10%  ;">
        <div class="card" style="width: 100%;">
            <div class="card-header text-center">
                <h1>Chi Tiết Đơn Sách</h1>
            </div>
            <div class="card-body">
                <div class="row mt-3">
                    <div class="col-3">
                        <strong>Mã Hoá Đơn</strong>
                    </div>
                    <div class="col-4" style="font-size: 20px; text-align: left;">{{ order.detail._id }}</div>
                </div>
                <div class="row mt-3">
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col" style="text-align: left; font-weight: bold; font-size: 20px;">Tên Sách
                                </th>

                                <th scope="col" style="text-align: center; font-weight: bold; font-size: 20px;">Ngày
                                    mượn
                                </th>
                                <th scope="col" style="text-align: center; font-weight: bold; font-size: 20px;">Ngày hết
                                    hạn
                                </th>
                                <th scope="col" style="text-align: right; font-weight: bold; font-size: 20px;">Trạng
                                    thái
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(i, index) in order.detail.prdId" :key="i._id">
                                <td style="text-align: left; font-size: 18px;">{{ i.productName }}</td>

                                <td style="text-align: center; font-size: 18px;">
                                    {{ order.createDate }}
                                </td>
                                <td style="text-align: center; font-size: 18px;">
                                    {{ order.detail.expiryDate[0] }}
                                </td>
                                <td style="text-align: right; font-size: 18px;">
                                    {{ checkStatus(order.detail.expiryDate[index]) }}
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.go(-1)'>Quay Lại</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Axios from '../services/service'

const props = defineProps(['id'])
const indexStatus = ["Đã huỷ", "Chờ Xác Nhận", "Đã cho mượn", "Đã Huỷ"]
const order = ref()

// Hàm tính toán ngày hết hạn từ ngày tạo đơn hàng
function calculateExpiryDate(createDate) {
    const expiryDate = new Date(createDate)
    expiryDate.setDate(expiryDate.getDate() + 14) // Thêm 14 ngày
    const date = expiryDate.getDate()
    const month = expiryDate.getMonth() + 1
    const year = expiryDate.getFullYear()
    return `${date}-${month}-${year}`
}

// Kiểm tra trạng thái của đơn hàng (Còn hạn / Hết hạn)
function checkStatus(expiryDate) {
    const today = new Date()
    const expiry = new Date(expiryDate)
    if (today <= expiry) {
        return "Còn hạn";
    } else {
        return "Hết hạn";
    }
}

async function getInfo() {
    order.value = await Axios.getDetail(props.id)
}
getInfo()

</script>


<style>
.col-3 strong {
    font-size: 20px;
}
</style>