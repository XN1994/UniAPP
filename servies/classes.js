import  $http from "./request.js"


// 查询班级列表
// /wechat/class/list
export const getClassList = ({pageSize,pageNum}) => {
  return $http.request({
    url: '/wechat/class/list',
    method: 'POST',
    header:{
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  })
}

// 优秀学员（名人堂）列表
export const getCelebrityList = ({pageSize,pageNum}) => {
  return $http.request({
    url: '/wechat/excellent/list',
    method: 'POST',
    header:{
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  })
}

// 公告列表
export const getNoticeList = ({pageSize,pageNum}) => {
  return $http.request({
    url: '/wechat/notice/list',
    method: 'POST',
    header:{
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  })
}
// 公告详情
export const getNoticeDetail = (index) => {
  return $http.request({
    url: `/wechat/notice/info/${index}`,
    method: 'GET'
  })
}