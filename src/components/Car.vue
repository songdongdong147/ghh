<template>
    <div>
       	<Vheader>Car</Vheader>
        <div class='gethot'>
          <ul>
            <li v-for="(item,index,key) in carlist" :key='key'>
             <input type="checkbox" class='ched'  v-model='item.sel' @change='dxan'>
              <img :src="item.goodimg" alt="" />
                <div>
                  <p>{{item.goodname}}</p>
                  <p>{{item.info}}</p>
                  <p>原价:{{item.num}}</p>
                  <p>￥:{{item.price}}
                    <span class='sl'>数量
                      <span class='jia' @click='jia(item)'>+</span>
                    {{item.count}}
                      <span class='jia' @click='jian(item)'>-</span>
                    </span>
                  </p>

                </div>
            </li>
          </ul>
        </div>
        <div class='gwhs'>
            全选：<input type="checkbox"   v-model="ched" @change='cheds'>
            <p>件数:<span>{{tobal}}</span>件</p>
            <p>总价:<span>{{tobals}}</span>元</p>
        </div>
    </div>
</template>

<script>
import Vheader from '../base/Vheader.vue'
import {mapState,mapGetters} from 'vuex'
import * as Types from '../vuex/mutations-Type.js'
// import {gwc} from '../api'
export default {

  data () {
    return {
      list:'',
      bol:false,
      kok:'',
      ched:false
    }
  },

  computed:{
      // ...mapState(["carlist"])
      // 结构赋值。 换名字写法：  前面是新的名字。后面是原有的名字
      ...mapState(['carlist']),
      ...mapGetters(['tobal','tobals']),


  },
  created(){
    // let gwcs= JSON.stringify(this.$store.state.carlist)
    //   gwc(gwcs);
    // this.list = carlist
  },
  mounted(){
      // let strorage = window.localStorage;
      // this.kok = JSON.parse(strorage.getItem('cars'));
  },
  methods:{
    jia(sel){
      // console.log('加')
        this.$store.commit(Types.Jia_CAR,sel);
    },
     jian(sel){
      // console.log('减')
        this.$store.commit(Types.Jian_CAR,sel);
    },
    cheds(){
        var that = this;
        this.$store.commit('types',that.ched);
    },
    dxan(){
        var that = this;
        var sel=this.$store.state.carlist;
        for(var i=0; i<sel.length; i++){
        if(sel[i].sel==true){
          this.$store.commit('typesa',sel[i].sel);
          that.ched=true;
        }else{
          this.$store.commit('typesa',sel[i].sel);
          that.ched=false;
          return
        }
      }
    }
  },
  components:{
  	Vheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gethot{
      margin-top: 50px;
      overflow-y: scroll;
      padding-bottom: 59px;
  }
.gethot>ul>li{
    width: 100%;
    height:130px;
    background:#fff;
    padding-top: 8px;
    box-size: border-box;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .gethot>ul>li>img{
    width: 40%;
    height: 100%;
    margin-right: 10px;
  }
  .gethot>ul>li>div{
    width: 60%;
    height: 100%;
  }
  .gethot>ul>li>div>p{
    display: inline-block;
    overflow: hidden;
    width: 85%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .gethot>ul>li>div>p:nth-of-type(3){
    color: blue !important;
  }
  .gethot>ul>li>div>p:nth-of-type(3)>span,
  .gethot>ul>li>div>p:nth-of-type(3)>a{
    color: #3e1528;
    font-size: 22px;
    font-weight: bold;
    text-decoration: underline;
  }
  .gethot>ul>li>div>p:nth-of-type(4){
    font-weight: bold;
    font-size: 20px;
    color: red !important;
  }
  .gethot>ul>li>div>p:hover{
    color: red;
  }
  .gwhs{
    width: 100%;
    height: 30px;
    background-color: orange;
    position: fixed;
    bottom:50px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right:10px;
  }
  .gwhs>p>span{
    color: red;
    font-weight: bold;
  }
  .ched{
      margin-top: 58px;
      transform: scale(2);
      margin-left: 10px;
      margin-right: 10px;
  }
  .jia{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: blue;
    text-align: center;
    line-height: 20px;
    color: orange;
  }
  .sl{
    color: #000;
  }
</style>















