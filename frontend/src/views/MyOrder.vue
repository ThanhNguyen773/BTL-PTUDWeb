<template>
    <section class="myorder" style="padding-top: 10%; padding-left: 25%; padding-right: 25%;">
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">

                    <li class="nav-item">
                        <a class="nav-link active">
                            Đơn Hiện Tại
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link ">
                            <router-link :to="`${props.id}/all`">
                                Tất Cả Đơn Hàng
                            </router-link>
                        </a>
                    </li>

                </ul>
            </div>
            <div class="card-body">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col" style="text-align: center; font-size: 18px;">Mã đơn</th>
                            <th scope="col" style="text-align: center; font-size: 18px;">Ngày lập</th>
                            <th scope="col" style="text-align: center; font-size: 18px;">Trạng Thái</th>
                            <th scope="col" style="text-align: center; font-size: 18px;"></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr class="align-middle " v-for="i in listBill" :key="i._id">
                            <th scope="row" style="text-align: center; font-size: 15px;"> {{ i._id }} </th>
                            <td style="font-size: 15px;"> {{ i.createDate }}</td>
                            <td style="font-size: 15px;"> {{ indexStatus[i.status] }}</td>

                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-success"
                                        @click="$router.push(`/myorder/${i._id}/detail`)">Chi Tiết</button>
                                    <button type="button" class="btn btn-outline-danger"
                                        @click="cancelBill(i._id)">Huỷ</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.push("/info")'>Quay Lại</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Axios from '../services/service'

const props = defineProps(['id'])
const listBill = ref([])
const indexStatus = ["Đã huỷ", "Chờ Xác Nhận", "Đã cho mượn", "Hết hạn","Đã Huỷ"]

async function getListBill() {
    listBill.value = await Axios.getAvailable(props.id)
}
getListBill()

async function cancelBill(id) {
    await Axios.cancel(id)
    getListBill()
}
</script>