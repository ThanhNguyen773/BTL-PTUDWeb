<template>
  <section class="products" id="products">

    <h1 class="heading" style="top: 0px;"> SÁCH <span>MỚI NHẤT</span> </h1>
    <div class="search">
      <input type="text" class="form-control" placeholder="Nhập tên sách muốn tìm kiếm ..." v-model="input"
        @keyup.enter="getPrdByName">
      <button class="btn btn-primary custom-class" @click="getPrdByName">Tìm</button>

    </div>

    <div class="additem">
      <button v-if="login === 'staff'" class="btn btn-primary btn-large" @click="$router.push('/productadd')">
        Thêm Mới
      </button>
    </div>


    <div class="box-container" v-if="prdList.length != 0">
      <div class="box" v-for="i in prdList" :key="i._id" :value="i._id">
        <img :src="i.PrdImage" alt="PrdImage">
        <div class="content">
          <h3 class="product-name">{{ i.productName }}</h3>          
          <h1 class="author-name">{{ i.author }}</h1>          
          <h1 class="genre">{{ i.type }}</h1>          
          <h1 class="nxb-name">{{ i.nxb }}</h1>  
          <button class="btns" v-if="login === 'user'" @click="additem(i)">Thêm vào mượn sách</button>
          <div v-else>
            <button class="btns" v-if=" login === 'staff'" @click="$router.push(`/product/${i._id}`)">Chỉnh sửa</button>
            <button class="btns" v-if=" login === 'staff'" @click="deletePrd(i._id)">Xoá</button>
            <button class="btns" v-if=" login === 'admin'" @click="toggleLock(i)">{{ i.isLocked ? 'Mở khoá' : 'Khoá' }}</button>

            <button class="btns" v-if="login !== 'user'&& login !== 'staff' && login !== 'admin'"   @click="additem(i)">Thêm vào mượn sách</button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-center mt-5" style="color:white" v-else>Không tìm thấy sản phẩm!</h2>


  </section>
</template>

<script setup>
import Axios from '../services/service'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const prdList = ref([])
const typeList = ref([])
const type = ref(0)
const input = ref('')

var userid = localStorage.info ? JSON.parse(localStorage.info)._id : null
const login = localStorage.isLogin

async function showPrd() {
  prdList.value = await Axios.getAllPrd()
}
showPrd()

async function getPrdByName() {
  const ct = type.value == 0 ? undefined : type.value
  prdList.value = await Axios.getPrdByName(input.value, ct)
}

async function getType() {
  typeList.value = await Axios.getType()
}
getType()

async function additem(prd) {
  if (!userid) {
    alert('Vui lòng đăng nhập')
    router.push('/login')
  }
  else {
    await Axios.addtoCart(userid, prd)
    alert(`Đã thêm ${prd.productName} vào mượn sách`)
  }
}

async function deletePrd(id) {
  await Axios.deletePrd(id)
  alert('Xoá sản phẩm thành công')
  getPrdByName()
}
async function toggleLock(product) {
    try {
        // Gọi API để thay đổi trạng thái khoá/mở khoá sản phẩm
        if (product.isLocked) {
            await unlockPrd(product._id);
            product.isLocked = false;
            alert('Đã mở khoá sản phẩm thành công');
        } else {
            await lockPrd(product._id);
            product.isLocked = true;
            alert('Đã khoá sản phẩm thành công');
        }
    } catch (error) {
        console.error('Lỗi khi thực hiện thao tác khoá/mở khoá sản phẩm:', error);
        alert('Đã xảy ra lỗi khi thực hiện thao tác này. Vui lòng thử lại sau.');
    }
}
</script>
<style scoped>
.heading {
  text-align: center;
  font-size: 4rem;
  color: black;
  padding: 1rem;
  margin-bottom: -5%;
}

.products {
  margin-top: 7%;
  margin-bottom: 5%;
}

.heading span {
  text-transform: uppercase;
  color: #3CB371;
  
}

.products .box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: -5%;
}

.products .box-container .box {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: #f9f9f9;
  flex: 1 1 30rem;

}

.products .box-container .box .content {
  padding: 1.5rem;

}

.products .box-container .box img {
  height: 300px;
  width: 200px;
  /* transform: rotate(-35deg); */
  filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
  margin: 5rem 2rem;
}
.product-name {
    font-weight: bold; /* Đậm */
    /* Thêm các quy tắc CSS khác tùy theo yêu cầu của bạn */
  
}
.products .box-container .box:hover img {
  transform: scale(1.2);
}

.products .box-container .box .icons {
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0.5rem;
  left: -10rem;
}
.author-name {
    font-size: 20px; /* Kích thước font */
    color: #333; /* Màu chữ */
    text-align: center; /* Căn giữa nội dung */
    /* Thêm các quy tắc CSS khác tùy theo yêu cầu của bạn */
}
.products .box-container .box:hover .icons {
  left: 1rem;
}

.products .search .custom-class {
  color: white;
  /* Màu chữ trắng */
  background-color: #3CB371;
  /* Màu nền xanh */
  width: 100px
}
.products .search .custom-class:hover {
  color: white;
  /* Màu chữ trắng */
  background-color: #125f35;
  /* Màu nền xanh */
  width: 100px
}
.products .box-container .box .icons i {
  height: 4.5rem;
  width: 5rem;
  line-height: 4.5rem;
  font-size: 2rem;
  color: black;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  background: #fff;
  margin-top: 0.5rem;
}
.btn-large {
    font-size: 20px; /* Kích thước font */
    padding: 12px 20px; /* Khoảng cách nút từ các lề */
    margin-bottom: 2%;
    margin-top: -3%;
    background-color: #3CB371;
}

.products .box-container .box .icons i:hover {
  background: rgba(45, 195, 145, 0.111);
  color: #fff;
}

.products .box-container .box .content h3 {
  color: black;
  font-size: 2.5rem;
}

.products .box-container .box .content .price {
  color: black;
  font-size: 2.5rem;
  font-weight: bolder;
  padding: 1rem 0;
}

.products .box-container .box .content .price span {
  color:#3CB371;
  font-size: 1.5rem;
  text-decoration: line-through;
}





.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
  margin: 5% 0;
}

.search input {
  height: 50px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
  border-radius: 10px;
  font-size: x-large;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid #3CB371;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}
.genre {
    font-size: 20px; /* Kích thước font */
    color:#3CB371; /* Màu chữ */
    font-weight: bold; /* Đậm */
    /* Thêm các quy tắc CSS khác tùy theo yêu cầu của bạn */
}   
.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
  background: #3CB371;
  font-size: larger;
}

.additem {
  text-align: center;
  padding-bottom: 5%;
}
.search button:hover {
  background-color: #071a12;
}
.additem button {
  font-size: 15px;
}
.additem button:hover {
  background-color:#0b6433;
}

.btns {
  background-color: rgba(0, 0, 0, 0); /* Màu nền mặc định */
  color: #080808; /* Màu chữ mặc định */
  border: 2px solid #071a12;
  padding: 8px 16px;
  margin-right: 8px;
}

.btns:hover {
  background-color:#3CB371; /* Màu nền khi hover */
  color:#f9f9f9
}
</style>