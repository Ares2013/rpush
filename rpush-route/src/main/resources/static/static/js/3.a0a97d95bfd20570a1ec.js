webpackJsonp([3],{CIfF:function(e,t){},ygRs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("BO1k"),n=a.n(i),s=a("Xxa5"),r=a.n(s),o=a("exGp"),u=a.n(o),l=a("S+hO"),c={name:"groupManagement",components:{groupDialog:function(){return a.e(13).then(a.bind(null,"cp09"))},nfTypeFilterInput:function(){return a.e(10).then(a.bind(null,"I1DD"))}},data:function(){return{keyword:"",groupName:"",menuListActive:{},page:{pageNum:1,pageSize:25,total:0},searchTypeList:[{label:"分组名称",id:0}],pageParam:{groupName:null},columnList:[],tableData:[],groupVisible:!1,menuList:[],groupId:0,isGroupDailog:!1,deleteName:"",deleteDialogVisible:!1,taskGroupIds:"",isGroup:!0}},mounted:function(){var e=this;return u()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.platformList();case 1:case"end":return t.stop()}},t,e)}))()},methods:{doSearch:function(){this.queryGroup()},typeSearchChange:function(e){this.searchTypeValue=e,this.pageParam.groupName=this.searchTypeValue.keyword},toReceiverPage:function(e){this.$router.push({name:"receiverManagement",query:{groupId:e.id,platform:this.menuListActive.id}})},routeTo:function(e){if(e){var t=!0,a=!1,i=void 0;try{for(var s,r=n()(this.menuList);!(t=(s=r.next()).done);t=!0){var o=s.value;if(o.id===e)return this.menuListActive=o,void this.queryGroup()}}catch(e){a=!0,i=e}finally{try{!t&&r.return&&r.return()}finally{if(a)throw i}}}this.menuListActive=this.menuList[0],this.queryGroup()},renderHeader:function(e,t){var a=t.column;return e("el-tooltip",{class:"item",attrs:{effect:"dark",content:a.label,placement:"top"}},[e("span",[a.label])])},handleSizeChange:function(e){this.page.pageSize=e,this.page.pageNum=1,this.queryGroup()},handleCurrentChange:function(e){this.page.pageNum=e,this.queryGroup()},handleSave:function(){this.queryGroup()},handleDelete:function(e){var t=this;this.$confirm("确定要删除分组【"+e.groupName+"】吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.b)(e.id,function(){t.queryGroup()})}).catch(function(){})},handleGroupInfo:function(e){this.groupId=e.id,this.groupVisible=!0,this.isGroupDailog=!0},handleMenuDelete:function(e){this.deleteDialogVisible=!0,this.taskGroupIds=e.id,this.deleteName=e.name,this.isGroup=!0},platformList:function(){var e=this;return u()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.i)({keyword:e.keyword,pageNo:1,pageSize:999});case 2:0===(a=t.sent).code&&(e.menuList=a.data,e.routeTo(e.menuListActive.id||e.$route.query.platform));case 4:case"end":return t.stop()}},t,e)}))()},queryGroup:function(){var e=this;return u()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.l)(e.menuListActive.id,{groupName:e.pageParam.groupName,pageNum:e.pageNum,pageSize:e.pageSize});case 2:a=t.sent,e.page.total=a.data.total,e.tableData=a.data.dataList;case 5:case"end":return t.stop()}},t,e)}))()}},watch:{groupVisible:function(e){e||(this.isGroupDailog=!1,this.groupId="")}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskManagement"},[e._m(0),e._v(" "),a("div",{staticClass:"taskManagement_container"},[a("div",{staticClass:"tm_c_wrap"},[a("div",{staticClass:"tm_c_menu"},[a("div",{staticClass:"tm_c_menu_option"},[e._m(1),e._v(" "),a("div",{staticClass:"tm_c_menu_search"},[a("el-input",{attrs:{size:"mini",placeholder:"请输入平台名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.platformList(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",size:"mini",icon:"el-icon-search"},on:{click:e.platformList},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"tm_c_menu_list"},e._l(e.menuList,function(t,i){return a("div",{key:i,staticClass:"item",class:e.menuListActive.id===t.id?"itemActive":"",on:{click:function(a){return e.routeTo(t.id)}}},[a("div",[e._v(e._s(t.name))])])}),0)]),e._v(" "),a("div",{staticClass:"tm_c_table"},[a("div",{staticClass:"setOfLayer"},[a("div",{staticClass:"features"},[a("span",{staticClass:"title"},[e._v(e._s(e.menuListActive.name))]),e._v(" "),a("div",{staticClass:"features_right"},[a("nfTypeFilterInput",{staticClass:"mgl6",attrs:{options:e.searchTypeList,value:this.searchTypeValue},on:{change:e.typeSearchChange,search:e.doSearch}}),e._v(" "),a("div",{staticClass:"el-icon-circle-plus-outline addTask",on:{click:e.handleGroupInfo}},[e._v("添加分组")])],1)]),e._v(" "),a("div",{staticClass:"remarks_box"},[e._v("\n            "+e._s(e.menuListActive.description)+"\n          ")]),e._v(" "),a("div",{staticClass:"table_layout fixedLayer"},[a("div",{staticClass:"setOfLayer"},[a("div",{staticClass:"table_layout_content fixedLayer"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"mini",height:"100%"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"序号",index:function(t){return t+(e.page.pageNum-1)*e.page.pageSize+1},width:"60"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"分组名称","show-overflow-tooltip":"",prop:"groupName","rander-header":e.renderHeader,width:"600"}}),e._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"optionIng"},[a("span",{staticClass:"operating",on:{click:function(a){return e.toReceiverPage(t.row)}}},[e._v("管理接收人")]),e._v(" "),a("span",{staticClass:"operating",on:{click:function(a){return e.handleGroupInfo(t.row)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"danger operating",on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table_page"},[a("el-pagination",{attrs:{"current-page":e.page.pageNum,"page-sizes":[25,50,100,150],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])])])])]),e._v(" "),e.isGroupDailog?a("group-dialog",{attrs:{dialogVisible:e.groupVisible,platform:e.menuListActive.id,groupId:e.groupId},on:{"update:dialogVisible":function(t){e.groupVisible=t},"update:dialog-visible":function(t){e.groupVisible=t},handleSave:e.handleSave}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"taskManagement_header"},[t("div",{staticClass:"title"},[this._v("接收人分组管理")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tm_c_menu_top"},[t("div",{staticClass:"tm_c_menu_top_title"},[this._v("平台")])])}]};var d=a("VU/8")(c,p,!1,function(e){a("CIfF")},"data-v-7376538a",null);t.default=d.exports}});
//# sourceMappingURL=3.a0a97d95bfd20570a1ec.js.map