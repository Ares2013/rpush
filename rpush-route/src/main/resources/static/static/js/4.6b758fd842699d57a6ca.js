webpackJsonp([4],{"0bQ8":function(e,t){},u6v4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),r=a.n(i),n=a("BO1k"),s=a.n(n),l=a("Xxa5"),o=a.n(l),c=a("exGp"),u=a.n(c),p=a("S+hO"),d=a("zL8q"),v={name:"receiverManagement",components:{receiverDialog:function(){return a.e(11).then(a.bind(null,"H895"))},cpUserImportDialog:function(){return a.e(12).then(a.bind(null,"u6ax"))},nfTypeFilterInput:function(){return a.e(9).then(a.bind(null,"I1DD"))}},data:function(){return{keyword:"",receiverName:"",menuListActive:{},page:{pageNum:1,pageSize:25,total:0},searchTypeList:[{label:"接收人名称",id:0},{label:"接收人ID",id:1},{label:"分组",id:2,selectOptions:null}],searchTypeValue:{keyword:"",selectedValue:"",option:null},pageParam:{groupId:null,receiverId:null,receiverName:""},receiverGroups:[],columnList:[],tableData:[],receiverVisible:!1,menuList:[],receiverId:0,isReceiverDailog:!1,deleteName:"",deleteDialogVisible:!1,isReceiver:!0,importDialog:!1,cpUserImportDialogVisible:!1}},mounted:function(){var e=this;return u()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.platformList();case 2:case"end":return t.stop()}},t,e)}))()},methods:{downloadTemplate:function(){Object(p.f)("接收人导入模板.xlsx")},importExcel:function(e){var t=e.file,a=t.size/1024/1024<2,i=new FormData;if(i.append("platform",this.menuListActive.id),i.append("file",t),!a)return this.$message.error("请上传2M以下的.xlsx文件"),!1;Object(p.j)(i,function(e){Object(d.Message)({message:"导入成功",type:"success"}),this.importDialog=!1})},submitImport:function(){this.$refs.upload.submit()},doSearch:function(){this.queryReceiver()},typeSearchChange:function(e){this.searchTypeValue=e;var t=this.searchTypeValue.option.id,a=this.searchTypeValue.keyword,i=this.searchTypeValue.selectedValue;switch(this.pageParam.receiverName="",this.pageParam.receiverId="",this.pageParam.groupId=null,t){case 0:this.pageParam.receiverName=a;break;case 1:this.pageParam.receiverId=a;break;case 2:this.pageParam.groupId=i}},routeTo:function(e){var t=this;return u()(o.a.mark(function a(){var i,r,n,l,c,u;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=32;break}i=!0,r=!1,n=void 0,a.prev=4,l=s()(t.menuList);case 6:if(i=(c=l.next()).done){a.next=18;break}if((u=c.value).id!==e){a.next=15;break}return t.menuListActive=u,a.next=12,t.initGroup();case 12:return a.next=14,t.queryReceiver();case 14:return a.abrupt("return");case 15:i=!0,a.next=6;break;case 18:a.next=24;break;case 20:a.prev=20,a.t0=a.catch(4),r=!0,n=a.t0;case 24:a.prev=24,a.prev=25,!i&&l.return&&l.return();case 27:if(a.prev=27,!r){a.next=30;break}throw n;case 30:return a.finish(27);case 31:return a.finish(24);case 32:return t.menuListActive=t.menuList[0],a.next=35,t.initGroup();case 35:return a.next=37,t.queryReceiver();case 37:case"end":return a.stop()}},a,t,[[4,20,24,32],[25,,27,31]])}))()},initGroup:function(){var e=this;return u()(o.a.mark(function t(){var a,i,r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.s)(e.menuListActive.id,{pageNum:1,pageSize:2147483647});case 2:for(a=t.sent,i=a.data.dataList,e.searchTypeList[2].selectOptions=[],r=0;r<i.length;r++)e.searchTypeList[2].selectOptions.push({id:i[r].id,label:i[r].groupName});(n=e.$route.query.groupId)&&(e.searchTypeValue.selectedValue=Number(n),e.searchTypeValue.option=e.searchTypeList[2],e.pageParam.groupId=Number(n));case 8:case"end":return t.stop()}},t,e)}))()},renderHeader:function(e,t){var a=t.column;return e("el-tooltip",{class:"item",attrs:{effect:"dark",content:a.label,placement:"top"}},[e("span",[a.label])])},handleSizeChange:function(e){this.page.pageSize=e,this.page.pageNum=1,this.queryReceiver()},handleCurrentChange:function(e){this.page.pageNum=e,this.queryReceiver()},handleSave:function(){this.queryReceiver()},handleDelete:function(e){var t=this;this.$confirm("确定要删除接收人【"+e.receiverName+"】吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(p.d)(e.id,function(){t.queryReceiver()})}).catch(function(){})},handleGroupInfo:function(e){this.receiverId=e.id,this.receiverVisible=!0,this.isReceiverDailog=!0},handleMenuDelete:function(e){this.deleteDialogVisible=!0,this.taskGroupIds=e.id,this.deleteName=e.name,this.isReceiver=!0},platformList:function(){var e=this;return u()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.p)({keyword:e.keyword,pageNo:1,pageSize:999});case 2:0===(a=t.sent).code&&(e.menuList=a.data,e.routeTo(e.menuListActive.id||e.$route.query.platform));case 4:case"end":return t.stop()}},t,e)}))()},queryReceiver:function(){var e=this;return u()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.u)(e.menuListActive.id,r()({},e.pageParam,{pageNum:e.pageNum,pageSize:e.pageSize}));case 2:a=t.sent,e.page.total=a.data.total,e.tableData=a.data.dataList;case 5:case"end":return t.stop()}},t,e)}))()}},watch:{receiverVisible:function(e){e||(this.isReceiverDailog=!1,this.groupId="")}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskManagement"},[e.cpUserImportDialogVisible?a("cp-user-import-dialog",{attrs:{dialogVisible:e.cpUserImportDialogVisible,platform:e.menuListActive.id},on:{"update:dialogVisible":function(t){e.cpUserImportDialogVisible=t},"update:dialog-visible":function(t){e.cpUserImportDialogVisible=t}}}):e._e(),e._v(" "),a("div",{staticClass:"taskManagement_header"},[a("div",{staticClass:"title"},[a("el-row",[a("el-col",{attrs:{span:22}},[e._v("接收人管理")]),e._v(" "),a("el-col",{attrs:{span:2}},[a("div",[a("el-dropdown",{staticStyle:{"line-height":"10px"},attrs:{trigger:"click",size:"small"}},[a("span",{staticClass:"el-dropdown-link"},[e._v("\n                导入接收人"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{icon:"el-icon-s-release"},nativeOn:{click:function(t){e.importDialog=!0}}},[e._v("从Excel导入")]),e._v(" "),"WECHAT_WORK_AGENT"===e.menuListActive.id?a("el-dropdown-item",{attrs:{icon:"el-icon-chat-round",type:"text"},nativeOn:{click:function(t){e.cpUserImportDialogVisible=!0}}},[e._v("从企业微信导入")]):e._e()],1)],1)],1)])],1),e._v(" "),a("el-dialog",{attrs:{width:"40%",visible:e.importDialog},on:{"update:visible":function(t){e.importDialog=t}}},[a("div",{staticClass:"importDialog-content"},[a("el-upload",{ref:"upload",attrs:{limit:1,"auto-upload":!1,drag:"","http-request":e.importExcel,accept:".xls,.xlsx",action:"customize"}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或\n              "),a("em",[e._v("点击上传")])])])],1),e._v(" "),a("span",{staticClass:"importDialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"importDialog-template-download",on:{click:e.downloadTemplate}},[a("i",{staticClass:"el-icon-download"}),a("a",[e._v("下载excel模板")])]),e._v(" "),a("span",[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.importDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitImport}},[e._v("确定导入")])],1)])])],1)]),e._v(" "),a("div",{staticClass:"taskManagement_container"},[a("div",{staticClass:"tm_c_wrap"},[a("div",{staticClass:"tm_c_menu"},[a("div",{staticClass:"tm_c_menu_option"},[e._m(0),e._v(" "),a("div",{staticClass:"tm_c_menu_search"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入平台名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.platformList(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",size:"mini",icon:"el-icon-search"},on:{click:e.platformList},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"tm_c_menu_list"},e._l(e.menuList,function(t,i){return a("div",{key:i,staticClass:"item",class:e.menuListActive.id===t.id?"itemActive":"",on:{click:function(a){return e.routeTo(t.id)}}},[a("div",[e._v(e._s(t.name))])])}),0)]),e._v(" "),a("div",{staticClass:"tm_c_table"},[a("div",{staticClass:"setOfLayer"},[a("div",{staticClass:"features"},[a("span",{staticClass:"title"},[e._v(e._s(e.menuListActive.name))]),e._v(" "),a("div",{staticClass:"features_right"},[a("nfTypeFilterInput",{staticClass:"mgl6",attrs:{options:e.searchTypeList,value:this.searchTypeValue},on:{change:e.typeSearchChange,search:e.doSearch}}),e._v(" "),a("div",{staticClass:"el-icon-circle-plus-outline addTask",on:{click:e.handleGroupInfo}},[e._v("添加接收人")])],1)]),e._v(" "),a("div",{staticClass:"remarks_box"},[e._v("\n            "+e._s(e.menuListActive.description)+"\n          ")]),e._v(" "),a("div",{staticClass:"table_layout fixedLayer"},[a("div",{staticClass:"setOfLayer"},[a("div",{staticClass:"table_layout_content fixedLayer"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"mini",height:"100%"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"序号",index:function(t){return t+(e.page.pageNum-1)*e.page.pageSize+1},width:"50"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"接收人名称","show-overflow-tooltip":"",prop:"receiverName","rander-header":e.renderHeader,width:"250"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"接收人ID","show-overflow-tooltip":"",prop:"receiverId","rander-header":e.renderHeader,width:"300"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"分组","show-overflow-tooltip":"",prop:"groupName","rander-header":e.renderHeader,width:"250"}}),e._v(" "),a("el-table-column",{attrs:{width:"120",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"optionIng"},[a("span",{staticClass:"operating",on:{click:function(a){return e.handleGroupInfo(t.row)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"danger operating",on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table_page"},[a("el-pagination",{attrs:{"current-page":e.page.pageNum,"page-sizes":[25,50,100,150],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])])])])]),e._v(" "),e.isReceiverDailog?a("receiver-dialog",{attrs:{dialogVisible:e.receiverVisible,platform:e.menuListActive.id,receiverId:e.receiverId,groupId:e.$route.query.groupId},on:{"update:dialogVisible":function(t){e.receiverVisible=t},"update:dialog-visible":function(t){e.receiverVisible=t},handleSave:e.handleSave}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tm_c_menu_top"},[t("div",{staticClass:"tm_c_menu_top_title"},[this._v("平台")])])}]};var h=a("VU/8")(v,m,!1,function(e){a("0bQ8")},"data-v-71a1281d",null);t.default=h.exports}});
//# sourceMappingURL=4.6b758fd842699d57a6ca.js.map