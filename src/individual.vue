<template>
  <div id="geren">
      <div class="pop">
          <ul>
              <li v-for='(item,index) in list'  @mouseover="hows(index)">
                    <div class='divs'>
                       <img :src="item.url" alt="">
                        <h2>{{item.geren}}</h2>
                    </div>
                    <div class='divsa' >
                        <p v-for="(items,indexs) in item.biye" style='height:60px'>
                            {{ items }}
                        </p> 
                    </div>
                  <div class='divsb'>
                    <div class='class'>
                        <img :src="item.urla" alt="">
                          <h2>{{item.geren}}</h2>
                    </div>
                      <ul class='uls'>
                        <li v-for="(itemsa,indexs) in item.beij">
                            <p>{{itemsa[0]}}</p>
                            <a @click='ools(index,indexs)'>
                                {{ itemsa[1] }}</a>
                            
                            <div class='ipta' v-if='index==2&&indexs==3'>
                                <input type="password" placeholder="请输入密码" @change='chakan'>  
                                <button @click='chakan'>查看</button> 
                                <p @click='chakanp'>密码错误,请重新输入</p>
                            </div>
                        </li>
                      </ul>
                  </div>
              </li>
          </ul>  
      </div>
  </div>
</template>

<script>
import  $  from 'jquery'
export default {
  name: 'geren',
  data(){
      return{ 
          bol:false,
        list:[
            {   
                url:require('./assets/个人简介.png'),
                urla:require('./assets/个人简介1.png'),
                geren:'个人信息',
                biye:[
                    '毕业院校',
                    '任职公司',
                    '兴趣爱好',
                    '自我评价'                
                ],
                beij:[
                    [
                        '毕业院校',
                        "北京工商管理专修学院",
                    ],
                    [
                        '任职公司',
                        "目前未任职任何公司",
                    ],
                    [
                        '兴趣爱好',
                        "旅游,运动....",
                    ],
                    [
                        '自我评价',
                        "本人性格开朗....",
                    ]
                ]
            },
            { 
                url:require('./assets/成长.png'),
                urla:require('./assets/成长1.png'),
                geren:'个人成长',
                biye:[
                   '2岁-7岁',
                    '9岁-15岁',
                     '16岁-22岁',
                     '23岁-至今'  
                    
                ],
                beij:[ 
                    [
                        '2岁-7岁',
                        "从出生到7岁在农村感觉满满的幸福感【幼稚的童年很是快乐】",
                    ],
                    [
                        '8岁-15岁',
                        "来到美丽的丰镇开始我的小学生涯【小学每天打打闹闹感觉特别无忧无虑】",
                    ],
                    [
                        '16岁-22岁',
                        "从小学升到了初中,而到了初中我开始住校【初中感觉到了思念家人的味道】",
                    ],
                    [
                        '23岁-至今',
                        "由于初中不理想,使我开始了大专的生涯【大专生涯让我知道了留给你学习的时间不多了】",
                    ]
                ]
            },
            { 
                url:require('./assets/日记1.png'),
                urla:require('./assets/日记.png'),
                geren:'个人日记',
                biye:[
                   '工作日记',
                   '学习日记',
                   '交友日记',
                   '私密日记'  
                ],
                beij:[
                    [
                        '工作日记',
                        "查看",
                    ],
                    [
                        '学习日记',
                        "查看",
                    ],
                    [
                        '交友日记',
                        "查看",
                    ],
                    [
                        '私密日记',
                        "输入密码可看",
                    ]
                    
                ]
            },
            { 
                url:require('./assets/荣誉.png'),
                urla:require('./assets/荣誉1.png'),
                geren:'个人荣誉',
                biye:[
                   '小学得奖',
                    '初中得奖',
                     '大专得奖',
                     '工作得奖'  
                    
                ],
                beij:[
                     [
                        '小学得奖',
                        "长跑第二",
                    ],
                    [
                        '初中得奖',
                        "三好学生",
                    ],
                    [
                        '大专得奖',
                        "表现优秀奖",
                    ],
                    [
                        '工作得奖',
                        "暂无",
                    ]
                    
                ]
            }
         ]
      }
    },
  methods:{
     hows(ss){
          var divsb=document.querySelectorAll('.pop>ul>li>.divsb');
          var lis=document.querySelectorAll('.pop>ul>li');
         for(var i=0; i<lis.length; i++){
            lis[i].style.width='259px'
            lis[i].style.height='546px'
            lis[i].style.top='0px'
            lis[i].style.boxShadow='none'
            divsb[i].style.opacity='0'
        }
        lis[ss].style.width='419px'
        lis[ss].style.height='626px'
        lis[ss].style. boxShadow=' -5px 1px 7px rgba(47,58,133,.24)'
         lis[ss].style.top='-36px'
        lis[ss].style.transition="all  0.2s linear"
        divsb[ss].style.opacity='1'
         divsb[ss].style.opacity='1'
     },
    //  工作日记，交友日记，学习日记跳转
     ools(ind,ind1){
        if(ind==2&&ind1!=3){
            this.$router.push({
				path:"/diary"+ind1
		    })
        }
        if(ind1==3){
          $('.ipta').css({
              display:'block'
          })
        }  
    },
    chakan(){
        if($('.ipta>input').val()=="147258369dong"){
             this.$router.push({
						path:"/privacydiary"
		    	})
        }  
        else if($('.ipta>input').val()!="147258369dong"){
            $('.ipta>input').val('')
            $('.ipta>p').css({
            	display:'block'
            })
        }
    },
    chakanp(){
    	 $('.ipta>p').css({
            	display:'none'
            })
    }
  },
  mounted(){

  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        transition: all 0.5 !important;
    }
   #geren{
       margin: 0;
       padding: 0;
       width:100%;
       height:662px;
       overflow: hidden;
    }
    .class{
        width:100%;
        height:186px;
        background-color: #4251B6;
        position: relative;
        padding-top: 20px;
        box-sizing: border-box;
    }
    .pop{
        min-width: 1200px;
        width: 1200px;
        margin-top: 55px;
        margin-left: auto;
        margin-right: auto;
    }
    .pop>ul{
        width:100%;
        height:100%;
    }
    .pop>ul>li{
        width: 259px;
        height: 546px;
        border: 1px solid #d9d9d9;
        margin-left: -1px;
        position: relative;
        float: left;
     }
     .divs{
         width:100%;
         height:172px;
         background-color: #F2F2F2;
         position: relative;
         text-align: center;
         padding-top: 19px;
          padding-bottom: 30px;
         box-sizing: border-box;
           transition:all  0.2s linear !important;
        }
     .divsa{
        width: 259px;
        height: 374px;
        background-color: #fff;
        box-sizing: border-box;
        padding-top: 60px;
        font-size: 16px;
        color: #373D41;
        transition:all  0.2s linear !important;
        position: absolute;
     }
     .divsb{
        width: 419px;
        height: 628px;
        background-color: #e4e6eb;;
        position: absolute; 
        /* right:0; */
        border: 1px solid #d9d9d9;
        /* transition:all  0.2s linear !important; */
        top: -4px;
        opacity: 0;
     }
     .class>img,
     .divs>img{
         width: 105px;
         height: 105px;
         margin: 0 auto;
     }
      .class>h2{
            color: #fff;
            font-size: 19px;
            font-weight: bold;
            height: 20px;
      }
      .divsb:before{
          content: '';
          border-top:10px solid #4251B6;
          border-right:18px solid transparent;
          border-left:18px solid transparent; 
          position: absolute;
          top:186px;
          left:50%;
          margin-left: -10px;
      }
       .divsb>ul{
           width:100%;
           height:442px;
           padding: 20px 18px;
           box-sizing: border-box;
       }
      .divsb>ul>li{
          width:100%;
          height:92px;
          background-color: #F5F5F9;
          margin-bottom: 14px;
          padding: 22px 29px 0px 17px;
          box-sizing: border-box;
      }
      .divs>h2{
          font-size: 19px;
          color: #333333;
      }
      .uls>li>p{
          height: 28px;
          color: #666;
          font-size:16px;
          text-align: left;

      }
      .pop>ul>li:nth-of-type(3)>.divsb>.uls>li{
        display: flex !important;
        justify-content: space-between  !important;
      }
      .pop>ul>li:nth-of-type(3)>.divsb>.uls>li>a{
        display: block;
        width: 140px !important;
        height:30px;
        border:1px solid #4251B6;
        color: #4251B6;
        text-align: center;
        line-height: 30px;
      }
       .pop>ul>li:nth-of-type(3)>.divsb>.uls>li>a:hover{
           background-color: #4251B6;
           color: #fff;
       }
        .uls>li>a{
        display: block;
        transition: all 0.5s;
          color: #666;
          font-size:12px;
          text-align: left;
      }
      .ipta{
          position: absolute;
          width:180px;
          height: 30px;
          right:40px;
          display: none;
      }
      .ipta>input{
          width: 140px;
          height:110%;
          border:0;
          border:1px solid #4251B6;
          box-sizing: border-box;
          position: absolute;
          left:0;
          font-size: 15px;
          padding-left: 5px;
      }
       .ipta>button{
           width: 40px;
           height: 33px;
           position: absolute;
           right:0;
           border: 0;
           outline: none;
           cursor: pointer;
           background-color: #4251B6;
           color: #fff;
       }
       .ipta>p{
       		position: absolute;
       		color: red;
       		background-color: #fff;
       		line-height: 40px;
       		width: 100%;
       		height: 40px;
       		top:-2px;
       		cursor: pointer;
       		display: none;
       		transition: all 0.5s;
       }
       
    @media screen and (max-width: 1220px){
    	.pop{
    		transform: scale(0.95) !important;
    	}
    		.uls>li>p{
    		font-size:23px !important;
    	}
    	.uls>li>a{
    		font-size:15px !important;
    	}
    	.divsa>p{
    		font-size:23px !important;
    	}
    }
     @media screen and (max-width: 1188px){
    	.pop{
    		transform: scale(0.9) !important;
    		margin-left:-25px !important;
    	}
   	.uls>li>p{
    		font-size:23px !important;
    	}
    	.uls>li>a{
    		font-size:15px !important;
    	}
    	.divsa>p{
    		font-size:23px !important;
    	}
    }
    @media screen and (max-width: 1128px){
    	.pop{
    		transform: scale(0.85) !important;
    		margin-left:-45px !important;
    	}
    		.uls>li>p{
    		font-size:23px !important;
    	}
    	.uls>li>a{
    		font-size:15px !important;
    	}
    	.divsa>p{
    		font-size:23px !important;
    	}
    } 
     @media screen and (max-width: 1081px){
    	.pop{
    		transform: scale(0.80) !important;
    		margin-left:-65px !important;
    	}
    		.uls>li>p{
    		font-size:23px !important;
    	}
    	.uls>li>a{
    		font-size:15px !important;
    	}
    	.divsa>p{
    		font-size:23px !important;
    	}
    } 
     @media screen and (max-width: 1025px){
    	.pop{
    		transform: scale(0.75) !important;
    		margin-left:-95px !important;
    	}
    	.uls>li>p{
    		font-size:23px !important;
    	}
    	.uls>li>a{
    		font-size:15px !important;
    	}
    	.divsa>p{
    		font-size:23px !important;
    	}
    }  
     @media screen and (max-width: 980px){
     		.pop{
     			/*width: 500px !important;*/
	    		transform: scale(1.7) !important;
	    		margin-left: -80px!important;
	    		margin-top: 1541px!important;
    		}
    		#geren{
    			height: 4000px !important;
    		}
    		.pop>ul>li{
    			margin-left:367px !important;
    		}
     }  
      @media screen and (max-width: 870px){
     		.pop{
	    		transform: scale(1.5) !important;
	    		margin-left: -140px!important;
	    		margin-top: 1100px!important;
    		}
    		#geren{
    			height: 3900px !important;
    		}
     }   
      @media screen and (max-width: 787px){
     		.pop{
	    		transform: scale(1.3) !important;
	    		margin-left: -190px!important;
	    		margin-top: 600px!important;
    		}
    		#geren{
    			height: 3200px !important;
    		}
     }
     @media screen and (max-width: 678px){
     		.pop{
	    		transform: scale(1) !important;
	    		margin-left: -250px!important;
	    		margin-top: 100px!important;
    		}
    		#geren{
    			height: 2400px !important;
    		}
     }   
      @media screen and (max-width: 575px){
     		.pop{
	    		transform: scale(1) !important;
	    		margin-left: -300px!important;
	    		margin-top: 100px!important;
    		}
    		#geren{
    			height: 2400px !important;
    		}
     }
       @media screen and (max-width: 530px){
     		.pop{
	    		margin-left: -320px!important;
    		}
     }
      @media screen and (max-width: 500px){
     		.pop{
	    		transform: scale(0.85) !important;
	    			margin-top: -70px!important;
	    			margin-left: -340px!important;
    		}
    		#geren{
    			height: 2100px !important;
    		}
     }  
      @media screen and (max-width: 446px){
     		.pop{
	    		transform: scale(0.7) !important;
	    			margin-top: -140px!important;
	    			margin-left: -380px!important;
    		}
    		#geren{
    			height: 1800px !important;
    		}
     } 
      @media screen and (max-width: 374px){
     		.pop{
	    			margin-left: -405px!important;
	    			margin-top: -190px!important;
    		}
    		#geren{
    			height: 1800px !important;
    		}
     }                 
</style>
