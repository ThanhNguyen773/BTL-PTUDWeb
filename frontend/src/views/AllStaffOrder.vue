<template>
    <section class="myorder" style="padding-top: 10%; padding-left: 25%; padding-right: 25%;">
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">

                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to="`/order`">
                                Đơn sách khách mượn
                            </router-link>
                        </a>
                    </li>

                    <!-- <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to="`/order/${SID}`">
                                Đơn đang xử lý
                            </router-link>
                        </a>
                    </li> -->

                    <li class="nav-item">
                        <a class="nav-link active">
                            Đơn đã hoàn thành
                        </a>
                    </li>

                </ul>
            </div>
            <div class="card-body" v-if="listOrder.length > 0">
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
                        <tr class="align-middle " v-for="i in listOrder" :key="i._id">
                            <th scope="row" style="text-align: center; font-size: 15px;"> {{ i._id }} </th>
                            <td style="font-size: 15px;"> {{ i.createDate }}</td>

                            <td style="font-size: 15px;"> {{ indexStatus[i.status] }}</td>

                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-success"
                                        @click="$router.push(`/myorder/${i._id}/detail`)">Chi Tiết</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="else text-center m-5" v-else>
                <h3>
                    Bạn Đang Không Xử Lý Đơn Nào
                </h3>
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
const listOrder = ref([])
const indexStatus = ["Đã huỷ", "Chờ xác nhận", "Đã cho mượn", "Đã xác nhận"]
const SID = JSON.parse(localStorage.info)._id

async function getListOrder() {
    listOrder.value = await Axios.getAllBySID(SID)
}
getListOrder()
</script>