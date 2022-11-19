import request from '@/utils/request'

export default{
    getDeptByHoscode(hoscode){
        return request({
            url:`/admin/hosp/department/${hoscode}`,
            method:'get'
        })
    }
}