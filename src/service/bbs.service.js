import baseService from './service.js'
import AppUrls from './serviceConfig.js'

const bbs = {
    //------------------------------------public----------------------------------------------------------//
    //获取getMenuInfo
    getMenuInfo(data) {
        return baseService(AppUrls.GET_MENU_INFO, {
            data: data
        })
    },
      //获取getMenuInfo
      logOut(data) {
        return baseService(AppUrls.LOG_OUT, {
            data: data
        })
    },
      //切换岗位
      logchange(data) {
        return baseService(AppUrls.LOG_CHANGE, {
            data: data
        })
    },
       //获取getMenuInfo
       getResourceInfo(data) {
        return baseService(AppUrls.GET_RESOURCE_INFO, {
            data: data
        })
    },
    //获取公共枚举值（public）
    getDefList(data) {
        return baseService(AppUrls.GET_DEF_LIST, {
            data: data,
            timeout: 100000
        })
    },
    //获取标签（public）
    getlabelList(data) {
        return baseService(AppUrls.LABEL_GET_LIST, {
            data: data
        })
    },
    // 上传图片（public）
    uploadEmp(data) {
        return baseService(AppUrls.UPLOAD_IMAGE, {
            data: data
        })
    },

    //获取省市关联数据（public）
    getMdmCityList(data) {
        return baseService(AppUrls.GET_MDM_CITY_LIST, {
            data: data,
            timeout: 100000
        })
    },
    //获取存在经销商的省市列表（public）
    getDealerMdmCityList(data) {
        return baseService(AppUrls.GET_DEALER_MDM_CITY_LIST, {
            data: data
        })
    },
    //------------------------------------车系管理数据----------------------------------------------------------//
    //获取车型数据
    getModelList(data) {
        return baseService(AppUrls.GET_MODEL_LIST, {
            data: data
        })
    },
    //获取车系数据
    getSeriesList(data) {
        return baseService(AppUrls.GET_SERIES_LIST, {
            data: data
        })
    },
    //------------------------------------用户管理----------------------------------------------------------//      
    //获取用户分页列表（用户管理
    getUserPageV2(data) {
        return baseService(AppUrls.GET_USER_PAGE_V2, {
            data: data
        })
    },
    //获取用户车辆信息
    getUserVehicleList(data) {
        return baseService(AppUrls.GET_USER_VEHICLE_LIST, {
            data: data
        })
    }, //未知（用户管理 ==》用户信息）
    getUserInsurancePage(data) {
        return baseService(AppUrls.GET_USER_INSURANCE_PAGE, {
            data: data
        })
    }, //未知（用户管理 ==》用户信息）
    getUserReceptionAddressPage(data) {
        return baseService(AppUrls.GET_USER_RECEPTION_ADDRESS_PAGE, {
            data: data
        })
    }, //用户售后身份设置（用户管理 ==》用户信息）
    setUserIdentificationName(data) {
        return baseService(AppUrls.SET_USER_IDENTIFICATION_NAME, {
            data: data
        })
    }, //未知 签到日志查询（用户管理 ==》用户日志）
    getUserA17SignInPage(data) {
        return baseService(AppUrls.GET_USER_A17SIGN_IN_PAGE, {
            data: data
        })
    }, //未知 摇一摇日志查询（用户管理 ==》用户日志）
    getUserA17ShakePage(data) {
        return baseService(AppUrls.GET_USER_A17_SHAKE_PAGE, {
            data: data
        })
    }, //未知 金币日志查询（用户管理 ==》用户日志）
    getUserCoinLogPage(data) {
        return baseService(AppUrls.GET_USER_COIN_LOG_PAGE, {
            data: data
        })
    }, //未知 中奖日志查询（用户管理 ==》用户日志）
    getUserAwardedLogPage(data) {
        return baseService(AppUrls.GET_USER_AWARDED_LOG_PAGE, {
            data: data
        })
    }, //未知 维保日志查询（用户管理 ==》用户日志）
    getUserPreOrderPage(data) {
        return baseService(AppUrls.GET_USER_PRE_ORDER_PAGE, {
            data: data
        })
    }, //获取特邀用户身份审核分页列表（用户管理 ==》用户日志
    getKOCReviewPage(data) {
        return baseService(AppUrls.GET_KOC_REVIEW_PAGE, {
            data: data
        })
    }, //特邀用户身份审核（用户管理 ==》用户日志）
    updateUserStatus(data) {
        return baseService(AppUrls.UPDATE_USER_STATUS, {
            data: data
        })
    },
    userKOCNameReview(data) {
        return baseService(AppUrls.USER_KOC_NAME_REVIEW, {
            data: data
        })
    },
    //清空KOC身份（用户管理
    clearUserKocName(data) {
        return baseService(AppUrls.CLEAR_USER_KOC_NAME, {
            data: data
        })
    },
    //------------------------------------广告管理----------------------------------------------------------//
    getBannerPage(data) {
        return baseService(AppUrls.GET_BANNER_PAGE, {
            data: data
        })
    },
    addBanner(data) {
        return baseService(AppUrls.ADD_BANNER, {
            data: data
        })
    },
    updateBanner(data) {
        return baseService(AppUrls.UPDATE_BANNER, {
            data: data
        })
    },
    getLaunchPage(data) {
        return baseService(AppUrls.GET_LAUNCH_PAGE, {
            data: data
        })
    },
    updateLaunch(data) {
        return baseService(AppUrls.UPDATE_LAUNCH, {
            data: data
        })
    },
    addLaunch(data) {
        return baseService(AppUrls.ADD_LAUNCH, {
            data: data
        })
    },
    //------------------------------------主题管理----------------------------------------------------------//
    getAppThemeDetail(data) {
        return baseService(AppUrls.GET_APP_THEME_DETAIL, {
            data: data
        })
    },
    getAppThemePage(data) {
        return baseService(AppUrls.GET_APP_THEME_PAGE, {
            data: data
        })
    },
    updateAppTheme(data) {
        return baseService(AppUrls.UPDATE_APP_THEME, {
            data: data
        })
    },
    addAppTheme(data) {
        return baseService(AppUrls.ADD_APP_THEME, {
            data: data
        })

    },
    getAppIconList(data) {
        return baseService(AppUrls.GET_APP_ICON_LIST, {
            data: data
        })

    },
    //------------------------------------论坛管理----------------------------------------------------------//
    getVotePage(data) {
        return baseService(AppUrls.GET_VOTE_PAGE, {
            data: data
        })
    },
    updateVoteStatus(data) {
        return baseService(AppUrls.UPDATE_VOTE_STATUS, {
            data: data
        })
    },
    getVoteExportData(data) {
        return baseService(AppUrls.GET_VOTE_EXPORT_DATA, {
            data: data
        })
    },
    updateVote(data) {
        return baseService(AppUrls.UPDATE_VOTE, {
            data: data
        })
    },
    addVote(data) {
        return baseService(AppUrls.ADD_VOTE, {
            data: data
        })
    },
    //------------------------------------经销商管理----------------------------------------------------------//
    getMdmList(data) {
        return baseService(AppUrls.GET_MDM_LIST, {
            data: data
        })
    },
    //------------------------------------车圈管理----------------------------------------------------------//
    getCarSocialList(data) {
        return baseService(AppUrls.GET_CAR_SOCIAL_LIST, {
            data: data
        })
    },
    //------------------------------------帖子管理----------------------------------------------------------//

    getBBSAgentUserList(data) {
        return baseService(AppUrls.GET_BBS_AGENT_USER_LIST, {
            data: data
        })
    },
    getBBSTopicPage(data) {
        return baseService(AppUrls.GET_BBS_TOPIC_PAGE, {
            data: data
        })
    },
    //------------------------------------活动管理----------------------------------------------------------//

    getActivityCommonConfig(data) {
        return baseService(AppUrls.GET_ACTIVITY_COMMON_CONFIG, {
            data: data
        })
    },
    getActivityPage(data) {
        return baseService(AppUrls.GET_ACTIVITY_PAGE, {
            data: data
        })
    },
    addActivity(data) {
        return baseService(AppUrls.ADD_ACTIVITY, {
            data: data
        })
    },
    updateActivity(data) {
        return baseService(AppUrls.UPDATE_ACTIVITY, {
            data: data
        })
    },
    getSessionListByActivityId(data) {
        return baseService(AppUrls.GET_SESSION_LIST_BY_ACTIVITY_ID, {
            data: data
        })
    },
    getSessionHistoryImgList(data) {
        return baseService(AppUrls.GET_SESSION_HISTORY_IMG_LIST, {
            data: data
        })
    },
    updateActivitySessionHistoryImage(data) {
        return baseService(AppUrls.UPDATE_ACTIVITY_SESSION_HISTORY_IMAGE, {
            data: data
        })
    },
    addActivitySession(data) {
        return baseService(AppUrls.ADD_ACTIVITY_SESSION, {
            data: data
        })
    },
    updateActivitySession(data) {
        return baseService(AppUrls.UPDATE_ACTIVITY_SESSION, {
            data: data
        })
    },
    getActivitySessionUser(data) {
        return baseService(AppUrls.GET_ACTIVITY_SESSION_USER, {
            data: data
        })
    },
    exportActivitySessionUser(data) {
        return baseService(AppUrls.EXPORT_ACTIVITY_SESSION_USER, {
            data: data
        })
    },
    updateActivityEntryStatus(data) {
        return baseService(AppUrls.UPDATE_ACTIVITY_ENTRY_STATUS, {
            data: data
        })
    },
    deleteActivitySession(data) {
        return baseService(AppUrls.DELETE_ACTIVITY_SESSION, {
            data: data
        })
    },
    getActivityAttribute(data) {
        return baseService(AppUrls.GET_ACTIVITY_ATTRIBUTE, {
            data: data
        })
    },
    saveActivityAttribute(data) {
        return baseService(AppUrls.SAVE_ACTIVITY_ATTRIBUTE, {
            data: data
        })
    },
    getActivityCommentPage(data) {
        return baseService(AppUrls.GET_ACTIVITY_COMMENT_PAGE, {
            data: data
        })
    },
    updateActivityCommentStatus(data) {
        return baseService(AppUrls.UPDATE_ACTIVITY_COMMENT_STATUS, {
            data: data
        })
    },
    getCarSocialPage(data) {
        return baseService(AppUrls.GET_CAR_SOCIAL_PAGE, {
            data: data
        })
    },
    //------------------------------------推荐购活动----------------------------------------------------------//
    getInvitePurchasePage(data) {
        return baseService(AppUrls.GET_INVITE_PURCHASE_PAGE, {
            data: data
        })
    },
    updateInvitePurchase(data) {
        return baseService(AppUrls.UPDATE_INVITE_PURCHASE, {
            data: data
        })
    },
    addInvitePurchase(data) {
        return baseService(AppUrls.ADD_INVITE_PURCHASE, {
            data: data
        })
    },

    deleteInvitePurchase(data) {
        return baseService(AppUrls.DELETE_INVITE_PURCHASE, {
            data: data
        })
    },
    //------------------------------------定制化试驾页面----------------------------------------------------------//
    getCustomTrailList(data) {
        return baseService(AppUrls.CUSTOM_TRAIL_GETLIST, {
            data: data
        })
    },
    getCustomTrailDetail(data) {
        return baseService(AppUrls.CUSTOM_TRAIL_GET_DETAIL, {
            data: data
        })
    },
    updateCustomTrail(data) {
        return baseService(AppUrls.CUSTOMTRAIL_UPDATE, {
            data: data
        })
    },

    insertCustomTrail(data) {
        return baseService(AppUrls.CUSTOMTRAIL_INSERT, {
            data: data
        })
    },
    //------------------------------------提醒卡片管理----------------------------------------------------------//
    getTipsCardPage(data) {
        return baseService(AppUrls.GET_TIPS_CARD_PAGE, {
            data: data
        })
    },
    updateTipsCardStatus(data) {
        return baseService(AppUrls.UPDATE_TIPS_CARD_STATUS, {
            data: data
        })
    },
    updateTipsCard(data) {
        return baseService(AppUrls.UPDATE_TIPS_CARD, {
            data: data
        })
    },
    addTipsCard(data) {
        return baseService(AppUrls.ADD_TIPS_CARD, {
            data: data
        })
    },
    //------------------------------------在售车型管理----------------------------------------------------------//
    getAppKvPage(data) {
        return baseService(AppUrls.GET_APP_KV_PAGE, {
            data: data
        })
    },
    updateAppKvStatus(data) {
        return baseService(AppUrls.UPDATE_APP_KV_STATUS, {
            data: data
        })
    },
    updateAppKv(data) {
        return baseService(AppUrls.UPDATE_APPKV, {
            data: data
        })
    },
    addAppKv(data) {
        return baseService(AppUrls.ADD_APPKV, {
            data: data
        })
    },
    deleteAppKv(data) {
        return baseService(AppUrls.DELETE_APPKV, {
            data: data
        })
    },
    //------------------------------------车详情接口----------------------------------------------------------//
    queryPageVehicleDetail(data) {
        return baseService(AppUrls.VEHICLEDETAIL_QUERY_PAGE, {
            data: data
        })
    },
    deleteVehicleDetail(data) {
        return baseService(AppUrls.VEHICLEDETAIL_DELETE, {
            data: data
        })
    },
    queryDetailVehicleDetail(data) {
        return baseService(AppUrls.VEHICLEDETAIL_QUERY_DETAIL, {
            data: data
        })
    },
    updateVehicleDetail(data) {
        return baseService(AppUrls.VEHICLEDETAIL_UPDATE, {
            data: data
        })
    },
    insertVehicleDetail(data) {
        return baseService(AppUrls.VEHICLEDETAIL_INSERT, {
            data: data
        })
    },
    vehicleDetailSourceQueryList(data) {
        return baseService(AppUrls.QUERY_LIST_VEHICLE_DETAIL_SOURCE, {
            data: data
        })
    },
    vehicleDetailSourceDelete(data) {
        return baseService(AppUrls.VEHICLE_DETAIL_SOURCE_DETALE, {
            data: data
        })
    },
    vehicleDetailSourceUpdate(data) {
        return baseService(AppUrls.VEHICLE_DETAIL_SOURCE_UPDATE, {
            data: data
        })
    },
    vehicleDetailSourceInsert(data) {
        return baseService(AppUrls.VEHICLE_DETAIL_SOURCE_INSERT, {
            data: data
        })
    },

    //------------------------------------权益管理----------------------------------------------------------//
    getListBuyCarRight(data) {
        return baseService(AppUrls.BUY_CAR_RIGHT_GET_LIST, {
            data: data
        })
    },
    deleteBuyCar(data) {
        return baseService(AppUrls.DELETE_BUY_CAR, {
            data: data
        })
    },
    getDetailBuyCarRight(data) {
        return baseService(AppUrls.BUY_CAR_RIGHT_GET_DETAIL, {
            data: data
        })
    },
    getAwardPage(data) {
        return baseService(AppUrls.GET_AWARD_PAGE, {
            data: data
        })
    },
    updateBuyCar(data) {
        return baseService(AppUrls.UPDATE_BUY_CAR, {
            data: data
        })
    },
    addBuyCar(data) {
        return baseService(AppUrls.ADD_BUY_CAR, {
            data: data
        })
    },
    //------------------------------------白名单管理----------------------------------------------------------//

    getPageVinwhite(data) {
        return baseService(AppUrls.VINWHITE_GET_PAGE, {
            data: data
        })
    },
    insertVinwhite(data) {
        return baseService(AppUrls.VINWHITE_INSERT, {
            data: data
        })
    },
    updateVinwhite(data) {
        return baseService(AppUrls.VINWHITE_UPDATE, {
            data: data
        })
    },
    getCountById(data) {
        return baseService(AppUrls.GET_COUNT_BY_ID, {
            data: data
        })
    },
    deleteVins(data) {
        return baseService(AppUrls.DELETE_VINS, {
            data: data
        })
    },
    deleteVinwhite(data) {
        return baseService(AppUrls.VINWHITE_DELETE, {
            data: data
        })
    },
    insertVins(data) {
        return baseService(AppUrls.INSERT_VINS, {
            data: data
        })
    },
    //------------------------------------艾维亚白名单管理----------------------------------------------------------//
    getPageAvenir(data) {
        return baseService(AppUrls.AVENIR_GET_PAGE, {
            data: data
        })
    },
    deleteAvenir(data) {
        return baseService(AppUrls.AVENIR_DELETE, {
            data: data
        })
    },
    insertBatch(data) {
        return baseService(AppUrls.INSERT_BATCH, {
            data: data
        })
    },
    //------------------------------------经销商扩展数据管理----------------------------------------------------------//
    queryPageDealerExtend(data) {
        return baseService(AppUrls.DEALER_EXTEND_QUERYPAGE, {
            data: data
        })
    },
    submitDealerExtend(data) {
        return baseService(AppUrls.DEALER_EXTEND_SUBMIT, {
            data: data
        })
    },
    //------------------------------------车辆扩展数据管理----------------------------------------------------------//
    getVehicleExtendPage(data) {
        return baseService(AppUrls.GET_VEHICLE_EXTEND_PAGE, {
            data: data
        })
    },
    deleteVehicleExtend(data) {
        return baseService(AppUrls.DELETE_VEHICLE_EXTEND, {
            data: data
        })
    },
    getVehicleExtendMyPage(data) {
        return baseService(AppUrls.GET_VEHICLE_EXTEND_MY_PAGE, {
            data: data
        })
    },
    addVehicleExtendMy(data) {
        return baseService(AppUrls.ADD_VEHICLE_EXTEND_MY, {
            data: data
        })
    },
    updateVehicleExtendMy(data) {
        return baseService(AppUrls.UPDATE_VEHICLE_EXTENDMY, {
            data: data
        })
    },
    deleteVehicleExtendMy(data) {
        return baseService(AppUrls.DELETE_VEHICLEEXTEND_MY, {
            data: data
        })
    },
    updateVehicleExtend(data) {
        return baseService(AppUrls.UPDATE_VEHICLE_EXTEND, {
            data: data
        })
    },
    addVehicleExtend(data) {
        return baseService(AppUrls.ADD_VEHICLE_EXTEND, {
            data: data
        })
    },
    //------------------------------------物料号管理----------------------------------------------------------//
    getVehicleExtendMaterialPage(data) {
        return baseService(AppUrls.GET_VEHICLE_EXTEND_MATERIAL_PAGE, {
            data: data
        })
    },
    importVehicleExtendMaterials(data) {
        return baseService(AppUrls.IMPORT_VEHICLE_EXTEND_MATERIALS, {
            data: data
        })
    },
    deleteVehicleExtendMaterial(data) {
        return baseService(AppUrls.DELETE_VEHICLE_EXTEND_MATERIAL, {
            data: data
        })
    },
    updateVehicleExtendMaterial(data) {
        return baseService(AppUrls.UPDATE_VEHICLE_EXTEND_MATERIAL, {
            data: data
        })
    },
    addVehicleExtendMaterial(data) {
        return baseService(AppUrls.ADD_VEHICLE_EXTEND_MATERIAL, {
            data: data
        })
    },

    getBBSAgentUserList(data) {
        return baseService(AppUrls.GET_BBS_AGENT_USER_LIST, {
            data: data
        })
    },
    addActivityComment(data) {
        return baseService(AppUrls.ADD_ACTIVITY_COMMENT, {
            data: data
        })
    },

}
export default bbs