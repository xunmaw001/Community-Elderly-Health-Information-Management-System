const base = {
    get() {
        return {
            url : "http://localhost:8080/sqlrjkxxglxt/",
            name: "sqlrjkxxglxt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/sqlrjkxxglxt/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区老人健康信息管理系统"
        } 
    }
}
export default base
