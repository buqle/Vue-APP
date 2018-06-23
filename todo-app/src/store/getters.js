import record from "./modules/record";

const getters={
  //user
  isLogin:state=>state.user.isLogin,
  user:state=>state.user.user,
  footerBarList:state=>state.user.footerBarList,

  //app
  Loadings:state=>state.app.Loadings,
  getArticleList:state=>state.app.articleInfo,

  //我的记录
  types:state=>state.record.types,
  loading:state=>state.record.loading,
  recordIndex:state=>state.record.index,
  End:state=>state.record.end
};
export default getters;
