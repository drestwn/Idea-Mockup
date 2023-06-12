<script>
import { usePostStore, usePostCarousellStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
export default {
    name: 'CarousellPage',
    computed: {
        ...mapState(usePostStore, ['posts']),
        ...mapState(usePostCarousellStore, ['postCaros'])
    },
    methods: {
        ...mapActions(usePostStore, ['renderPost']),
        ...mapActions(usePostCarousellStore, ['renderPignation'])

    },
    created() {
        this.renderPost()
        this.renderPignation()
        // this.renderPostPig()
    }
}
</script>
<template>
    <div class="relative">
        <div class="contaioner p-9">
            Slide sideways
            <div class="w-65 carousel rounded-box ">
                <div class="carousel-item" v-for="(dp, index) in posts" :key="dp.id">
                    <img :src="dp.imgUrl" alt="Art" />
                </div>
            </div>
        </div>
    </div>
</template>
