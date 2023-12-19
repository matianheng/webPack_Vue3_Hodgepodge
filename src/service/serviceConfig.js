import httpRequestConstants from "./http-request-constants";

export default {
    //------------------------------------public----------------------------------------------------------//
    // 获取GetMenuInfo(public)
    GET_MENU_INFO: {
        path: '/getMenuInfo',
        resourceId: 'GET_MENU_INFO',
        method: httpRequestConstants.METHOD_GET,
    },
     // 获取LOG_OUT(public)
     LOG_OUT: {
        path: '/oauth/logout',
        resourceId: 'LOG_OUT',
        method: httpRequestConstants.METHOD_GET,
    },
       // 获取LOG_OUT(public)
       LOG_CHANGE: {
        path: '/oauth/clear/session',
        resourceId: 'LOG_CHANGE',
        method: httpRequestConstants.METHOD_GET,
    },
    GET_RESOURCE_INFO: {
        path: '/getResourceInfo',
        resourceId: 'GET_RESOURCE_INFO',
        method: httpRequestConstants.METHOD_GET,
    },
    //获取公共枚举值（public）
    GET_DEF_LIST: {
        path: '/serviceEmp/web-api-public-commCodeDef-getDefList', ///web/ibuick/service/web-api-public-commCodeDef-getDefList
        resourceId: 'GET_DEF_LIST',
        method: httpRequestConstants.METHOD_POST,

    },
    //获取标签（public）
    LABEL_GET_LIST: {
        path: '/serviceEmp/web-api-public-label-getList',
        resourceId: 'LABEL_GET_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    // 上传图片（public）
    UPLOAD_IMAGE: {
        path: '/uploadEmp',
        resourceId: 'UPLOAD_IMAGE',
        method: httpRequestConstants.METHOD_POST,
    },

    //获取省市关联数据（public）
    GET_MDM_CITY_LIST: {
        path: '/serviceEmp/web-api-public-commonManage-getMdmCityList',
        resourceId: 'GET_MDM_CITY_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取存在经销商的省市列表
    GET_DEALER_MDM_CITY_LIST: {
        path: '/serviceEmp/web-api-public-dealer-getMdmCityList',
        resourceId: 'GET_DEALER_MDM_CITY_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------车系管理数据----------------------------------------------------------//
    //获取车型数据
    GET_MODEL_LIST: {
        path: '/serviceEmp/web-api-public-vehicleManage-getModelList',
        resourceId: 'GET_MODEL_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取车系数据
    GET_SERIES_LIST: {
        path: '/serviceEmp/web-api-public-vehicleManage-getSeriesList',
        resourceId: 'GET_SERIES_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------用户管理----------------------------------------------------------//
    //引用-GET_MODEL_LIST-获取车型数据（用户管理 ==》用户信息）

    //获取用户分页列表（用户管理 ==》用户信息）
    GET_USER_PAGE_V2: {
        path: '/serviceEmp/web-api-public-userManage-getUserPageV2',
        resourceId: 'GET_USER_PAGE_V2',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取用户车辆信息（用户管理 ==》用户信息）
    GET_USER_VEHICLE_LIST: {
        path: '/serviceEmp/web-api-public-userManage-getUserVehicleList',
        resourceId: 'GET_USER_VEHICLE_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取会员保险信息分页列表（用户管理 ==》用户信息）
    GET_USER_INSURANCE_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getUserInsurancePage',
        resourceId: 'GET_USER_INSURANCE_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取会员收货地址分页列表（用户管理 ==》用户信息）
    GET_USER_RECEPTION_ADDRESS_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getUserReceptionAddressPage',
        resourceId: 'GET_USER_RECEPTION_ADDRESS_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //用户售后身份设置（用户管理 ==》用户信息）
    SET_USER_IDENTIFICATION_NAME: {
        path: '/serviceEmp/web-api-public-userManage-setUserIdentificationName',
        resourceId: 'SET_USER_IDENTIFICATION_NAME',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取用户签到情况分页列表 签到日志查询（用户管理 ==》用户日志）
    GET_USER_A17SIGN_IN_PAGE: {
        path: '/serviceEmp/web-api-public-A17Manage-getUserA17SignInPage',
        resourceId: 'GET_USER_A17SIGN_IN_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取用户摇一摇情况分页列表 摇一摇日志查询（用户管理 ==》用户日志）
    GET_USER_A17_SHAKE_PAGE: {
        path: '/serviceEmp/web-api-public-A17Manage-getUserA17ShakePage',
        resourceId: 'GET_USER_A17_SHAKE_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取会员金币记录分页列表 金币日志查询（用户管理 ==》用户日志）
    GET_USER_COIN_LOG_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getUserCoinLogPage',
        resourceId: 'GET_USER_COIN_LOG_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取会员中奖记录分页列表 中奖日志查询（用户管理 ==》用户日志）
    GET_USER_AWARDED_LOG_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getUserAwardedLogPage',
        resourceId: 'GET_USER_AWARDED_LOG_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取会员维保申请记录分页列表 维保日志查询（用户管理 ==》用户日志）
    GET_USER_PRE_ORDER_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getUserPreOrderPage',
        resourceId: 'GET_USER_PRE_ORDER_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取特邀用户身份审核分页列表（用户管理 ==》用户日志）
    GET_KOC_REVIEW_PAGE: {
        path: '/serviceEmp/web-api-public-userManage-getKOCReviewPage',
        resourceId: 'GET_KOC_REVIEW_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //特邀用户身份审核（用户管理 ==》用户日志）
    UPDATE_USER_STATUS: {
        path: '/serviceEmp/web-api-public-userManage-updateUserStatus',
        resourceId: 'UPDATE_USER_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    //清空KOC身份
    USER_KOC_NAME_REVIEW: {
        path: '/serviceEmp/web-api-public-userManage-userKOCNameReview',
        resourceId: 'USER_KOC_NAME_REVIEW',
        method: httpRequestConstants.METHOD_POST,
    },

    //清空KOC身份
    CLEAR_USER_KOC_NAME: {
        path: '/serviceEmp/web-api-public-userManage-clearUserKocName',
        resourceId: 'CLEAR_USER_KOC_NAME',
        method: httpRequestConstants.METHOD_POST,
    },

    //------------------------------------广告管理----------------------------------------------------------//
    //获取APP广告页（广告管理 ==》APP广告页）
    GET_BANNER_PAGE: {
        path: '/serviceEmp/web-api-public-adManage-getBannerPage',
        resourceId: 'GET_BANNER_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增APP广告页（广告管理 ==》APP广告页）
    ADD_BANNER: {
        path: '/serviceEmp/web-api-public-adManage-addBanner',
        resourceId: 'ADD_BANNER',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新APP广告页（广告管理 ==》APP广告页）
    UPDATE_BANNER: {
        path: '/serviceEmp/web-api-public-adManage-updateBanner',
        resourceId: 'UPDATE_BANNER',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取app加载页（广告管理 ==》APP加载页）
    GET_LAUNCH_PAGE: {
        path: '/serviceEmp/web-api-public-adManage-getLaunchPage',
        resourceId: 'GET_LAUNCH_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新app加载页详情（广告管理 ==》APP加载页）
    UPDATE_LAUNCH: {
        path: '/serviceEmp/web-api-public-adManage-updateLaunch',
        resourceId: 'UPDATE_LAUNCH',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增app加载页详情（广告管理 ==》APP加载页）
    ADD_LAUNCH: {
        path: '/serviceEmp/web-api-public-adManage-addLaunch',
        resourceId: 'ADD_LAUNCH',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------主题管理----------------------------------------------------------//
    //新增app加载页详情（主题管理 ==》主题列表管理）
    GET_APP_THEME_PAGE: {
        path: '/serviceEmp/web-api-public-appManage-getAppThemePage',
        resourceId: 'GET_APP_THEME_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取主题详情
    GET_APP_THEME_DETAIL: {
        path: '/serviceEmp/web-api-public-appManage-getAppThemeDetail',
        resourceId: 'GET_APP_THEME_DETAIL',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改主题详情
    UPDATE_APP_THEME: {
        path: '/serviceEmp/web-api-public-appManage-updateAppTheme',
        resourceId: 'UPDATE_APP_THEME',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增主题详情
    ADD_APP_THEME: {
        path: '/serviceEmp/web-api-public-appManage-addAppTheme',
        resourceId: 'ADD_APP_THEME',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增主题详情
    GET_APP_ICON_LIST: {
        path: '/serviceEmp/web-api-public-dataManage-getAppIconList',
        resourceId: 'GET_APP_ICON_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------论坛管理----------------------------------------------------------//
    //查询投票管理
    GET_VOTE_PAGE: {
        path: '/serviceEmp/web-api-public-voteManage-getVotePage',
        resourceId: 'GET_VOTE_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //下架投票数据
    UPDATE_VOTE_STATUS: {
        path: '/serviceEmp/web-api-public-voteManage-updateVoteStatus',
        resourceId: 'UPDATE_VOTE_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    //投票结果查询
    GET_VOTE_EXPORT_DATA: {
        path: '/serviceEmp/web-api-public-voteManage-getVoteExportData',
        resourceId: 'GET_VOTE_EXPORT_DATA',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新结果
    UPDATE_VOTE: {
        path: '/serviceEmp/web-api-public-voteManage-updateVote',
        resourceId: 'UPDATE_VOTE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增结果
    ADD_VOTE: {
        path: '/serviceEmp/web-api-public-voteManage-addVote',
        resourceId: 'ADD_VOTE',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------经销商管理----------------------------------------------------------//
    //获取经销商列表
    GET_MDM_LIST: {
        path: '/serviceEmp/web-api-public-dealer-getMdmList',
        resourceId: 'GET_MDM_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------车圈管理----------------------------------------------------------//
    //获取车圈列表
    GET_CAR_SOCIAL_LIST: {
        path: '/serviceEmp/web-api-public-carSocialManage-getCarSocialList',
        resourceId: 'GET_CAR_SOCIAL_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------帖子管理----------------------------------------------------------//
    //获取官方发帖代言人列表
    GET_BBS_AGENT_USER_LIST: {
        path: '/serviceEmp/web-api-public-bbsManage-getBBSAgentUserList',
        resourceId: 'GET_BBS_AGENT_USER_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取话题分页列表
    GET_BBS_TOPIC_PAGE: {
        path: '/serviceEmp/web-api-public-bbsManage-getBBSTopicPage',
        resourceId: 'GET_BBS_TOPIC_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },


    //------------------------------------活动管理----------------------------------------------------------//
    //引用-GET_SERIES_LIST-获取车系数据（活动管理 ==》线上活动管理）;
    //引用 -GET_LIST- 获取标签（public；
    //引用 -GET_MDM_LIST- 获取经销商列表（public；
    //引用 -GET_BBS_TOPIC_PAGE- 获取话题分页列表

    //获取活动配置数据
    GET_ACTIVITY_COMMON_CONFIG: {
        path: '/serviceEmp/web-api-public-activityManage-getActivityCommonConfig',
        resourceId: 'GET_ACTIVITY_COMMON_CONFIG',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取活动分页列表
    GET_ACTIVITY_PAGE: {
        path: '/serviceEmp/web-api-public-activityManage-getActivityPage',
        resourceId: 'GET_ACTIVITY_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增活动数据
    ADD_ACTIVITY: {
        path: '/serviceEmp/web-api-public-activityManage-addActivity',
        resourceId: 'ADD_ACTIVITY',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改活动数据
    UPDATE_ACTIVITY: {
        path: '/serviceEmp/web-api-public-activityManage-updateActivity',
        resourceId: 'UPDATE_ACTIVITY',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取活动场次列表
    GET_SESSION_LIST_BY_ACTIVITY_ID: {
        path: '/serviceEmp/web-api-public-activityManage-getSessionListByActivityId',
        resourceId: 'GET_SESSION_LIST_BY_ACTIVITY_ID',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取活动场次精彩回顾图片列表
    GET_SESSION_HISTORY_IMG_LIST: {
        path: '/serviceEmp/web-api-public-activityManage-getSessionHistoryImgList',
        resourceId: 'GET_SESSION_HISTORY_IMG_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //活动场次精彩回顾图片管理
    UPDATE_ACTIVITY_SESSION_HISTORY_IMAGE: {
        path: '/serviceEmp/web-api-public-activityManage-updateActivitySessionHistoryImage',
        resourceId: 'UPDATE_ACTIVITY_SESSION_HISTORY_IMAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //创建活动场次
    ADD_ACTIVITY_SESSION: {
        path: '/serviceEmp/web-api-public-activityManage-addActivitySession',
        resourceId: 'ADD_ACTIVITY_SESSION',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新活动场次
    UPDATE_ACTIVITY_SESSION: {
        path: '/serviceEmp/web-api-public-activityManage-updateActivitySession',
        resourceId: 'UPDATE_ACTIVITY_SESSION',
        method: httpRequestConstants.METHOD_POST,
    },
    //活动场次报名分页列表
    GET_ACTIVITY_SESSION_USER: {
        path: '/serviceEmp/web-api-public-activityManage-getActivitySessionUser',
        resourceId: 'GET_ACTIVITY_SESSION_USER',
        method: httpRequestConstants.METHOD_POST,
    },
    //活动场次报名成员导出
    EXPORT_ACTIVITY_SESSION_USER: {
        path: '/serviceEmp/web-api-public-activityManage-exportActivitySessionUser',
        resourceId: 'EXPORT_ACTIVITY_SESSION_USER',
        method: httpRequestConstants.METHOD_POST,
    },
    //活动场次报名成员审核
    UPDATE_ACTIVITY_ENTRY_STATUS: {
        path: '/serviceEmp/web-api-public-activityManage-updateActivityEntryStatus',
        resourceId: 'UPDATE_ACTIVITY_ENTRY_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    //活动场次删除
    DELETE_ACTIVITY_SESSION: {
        path: '/serviceEmp/web-api-public-activityManage-deleteActivitySession',
        resourceId: 'DELETE_ACTIVITY_SESSION',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取活动报名配置信息 
    GET_ACTIVITY_ATTRIBUTE: {
        path: '/serviceEmp/web-api-public-activityManage-getActivityAttribute',
        resourceId: 'GET_ACTIVITY_ATTRIBUTE',
        method: httpRequestConstants.METHOD_POST,
    },
    //保存活动报名配置信息 
    SAVE_ACTIVITY_ATTRIBUTE: {
        path: '/serviceEmp/web-api-public-activityManage-saveActivityAttribute',
        resourceId: 'SAVE_ACTIVITY_ATTRIBUTE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取活动评论列表信息 
    GET_ACTIVITY_COMMENT_PAGE: {
        path: '/serviceEmp/web-api-public-activityManage-getActivityCommentPage',
        resourceId: 'GET_ACTIVITY_COMMENT_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新活动审核状态
    UPDATE_ACTIVITY_COMMENT_STATUS: {
        path: '/serviceEmp/web-api-public-activityManage-updateActivityCommentStatus',
        resourceId: 'UPDATE_ACTIVITY_COMMENT_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    GET_CAR_SOCIAL_PAGE: {
        path: '/serviceEmp/web-api-public-carSocialManage-getCarSocialPage',
        resourceId: 'GET_CAR_SOCIAL_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------推荐购活动----------------------------------------------------------//
    //引用 -GET_BBS_AGENT_USER_LIST- 获取代理用户列表
    //获取推荐购列表
    GET_INVITE_PURCHASE_PAGE: {
        path: '/serviceEmp/web-api-public-inviteManage-getInvitePurchasePage',
        resourceId: 'GET_INVITE_PURCHASE_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改推荐购活动
    UPDATE_INVITE_PURCHASE: {
        path: '/serviceEmp/web-api-public-inviteManage-updateInvitePurchase',
        resourceId: 'UPDATE_INVITE_PURCHASE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增推荐购活动
    ADD_INVITE_PURCHASE: {
        path: '/serviceEmp/web-api-public-inviteManage-addInvitePurchase',
        resourceId: 'ADD_INVITE_PURCHASE',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除推荐购活动
    DELETE_INVITE_PURCHASE: {
        path: '/serviceEmp/web-api-public-inviteManage-deleteInvitePurchase',
        resourceId: 'DELETE_INVITE_PURCHASE',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------定制化试驾页面----------------------------------------------------------//
    //引用 -GET_APP_KV_PAGE- 获取app查看车分页列表
    //引用 -GET_MDM_CITY_LIST- 获取省市关联数据（public）
    //引用 -GET_DEALER_MDM_CITY_LIST- 获取存在经销商的省市列表
    //获取定制化试驾页面列表数据
    CUSTOM_TRAIL_GETLIST: {
        path: '/serviceEmp/web-api-public-customTrail-getList',
        resourceId: 'CUSTOM_TRAIL_GETLIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取定制化试驾页面详情
    CUSTOM_TRAIL_GET_DETAIL: {
        path: '/serviceEmp/web-api-public-customTrail-getDetail',
        resourceId: 'CUSTOM_TRAIL_GET_DETAIL',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新定制化试驾页面详情
    CUSTOMTRAIL_UPDATE: {
        path: '/serviceEmp/web-api-public-customTrail-update',
        resourceId: 'CUSTOMTRAIL_UPDATE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增定制化试驾页面详情
    CUSTOMTRAIL_INSERT: {
        path: '/serviceEmp/web-api-public-customTrail-insert',
        resourceId: 'CUSTOMTRAIL_INSERT',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------提醒卡片管理----------------------------------------------------------//
    //获取提醒卡片列表
    GET_TIPS_CARD_PAGE: {
        path: '/serviceEmp/web-api-public-tipsCardManage-getTipsCardPage',
        resourceId: 'GET_TIPS_CARD_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新提醒卡片面状态
    UPDATE_TIPS_CARD_STATUS: {
        path: '/serviceEmp/web-api-public-tipsCardManage-updateTipsCardStatus',
        resourceId: 'UPDATE_TIPS_CARD_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改提醒卡片页面详情
    UPDATE_TIPS_CARD: {
        path: '/serviceEmp/web-api-public-tipsCardManage-updateTipsCard',
        resourceId: 'UPDATE_TIPS_CARD',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增提醒卡片页面详情
    ADD_TIPS_CARD: {
        path: '/serviceEmp/web-api-public-tipsCardManage-addTipsCard',
        resourceId: 'ADD_TIPS_CARD',
        method: httpRequestConstants.METHOD_POST,
    },

    //------------------------------------在售车型管理----------------------------------------------------------//
    //引用 -GET_DEF_LIST- 获取app查看车分页列表
    //引用 -GET_APP_KV_PAGE- 获取app分页列表（public）
    //引用 -QUERY_PAGE- 车详情列表查询（public）
    //引用 -GET_SERIES_LIST- 获取车系（public）

    //获取app查看车分页列表
    GET_APP_KV_PAGE: {
        path: '/serviceEmp/web-api-public-adManage-getAppKvPage',
        resourceId: 'GET_APP_KV_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新在售车型状态
    UPDATE_APP_KV_STATUS: {
        path: '/serviceEmp/web-api-public-adManage-updateAppKvStatus',
        resourceId: 'UPDATE_APP_KV_STATUS',
        method: httpRequestConstants.METHOD_POST,
    },
    //编辑在售车型
    UPDATE_APPKV: {
        path: '/serviceEmp/web-api-public-adManage-updateAppKv',
        resourceId: 'UPDATE_APPKV',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增在售车型
    ADD_APPKV: {
        path: '/serviceEmp/web-api-public-adManage-addAppKv',
        resourceId: 'ADD_APPKV',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除在售车型
    DELETE_APPKV: {
        path: '/serviceEmp/web-api-public-adManage-deleteAppKv',
        resourceId: 'DELETE_APPKV',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------车详情接口----------------------------------------------------------//
    //引用 -GET_CAR_SOCIAL_LIST- 获取车圈接口（public）
    //引用 -GET_SERIES_LIST- 获取车系（public）
    //引用 -GET_DEF_LIST-获取公共枚举值（public）
    //引用 -GET_APP_KV_PAGE- 获取app分页列表（public）
    //车详情列表查询
    VEHICLEDETAIL_QUERY_PAGE: {
        path: '/serviceEmp/web-api-public-vehicleDetail-queryPage',
        resourceId: 'VEHICLEDETAIL_QUERY_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除车详情
    VEHICLEDETAIL_DELETE: {
        path: '/serviceEmp/web-api-public-vehicleDetail-delete',
        resourceId: 'VEHICLEDETAIL_DELETE',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取车详情
    VEHICLEDETAIL_QUERY_DETAIL: {
        path: '/serviceEmp/web-api-public-vehicleDetail-queryDetail',
        resourceId: 'VEHICLEDETAIL_QUERY_DETAIL',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新车详情
    VEHICLEDETAIL_UPDATE: {
        path: '/serviceEmp/web-api-public-vehicleDetail-update',
        resourceId: 'VEHICLEDETAIL_UPDATE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增车详情
    VEHICLEDETAIL_INSERT: {
        path: '/serviceEmp/web-api-public-vehicleDetail-insert',
        resourceId: 'VEHICLEDETAIL_INSERT',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增车详情
    QUERY_LIST_VEHICLE_DETAIL_SOURCE: {
        path: '/serviceEmp/web-api-public-vehicleDetailSource-queryList',
        resourceId: 'QUERY_LIST_VEHICLE_DETAIL_SOURCE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增车详情
    VEHICLE_DETAIL_SOURCE_DETALE: {
        path: '/serviceEmp/web-api-public-vehicleDetailSource-delete',
        resourceId: 'VEHICLE_DETAIL_SOURCE_DETALE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增车详情
    VEHICLE_DETAIL_SOURCE_UPDATE: {
        path: '/serviceEmp/web-api-public-vehicleDetailSource-update',
        resourceId: 'VEHICLE_DETAIL_SOURCE_UPDATE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增车详情
    VEHICLE_DETAIL_SOURCE_INSERT: {
        path: '/serviceEmp/web-api-public-vehicleDetailSource-insert',
        resourceId: 'VEHICLE_DETAIL_SOURCE_INSERT',
        method: httpRequestConstants.METHOD_POST,
    },



    //------------------------------------权益管理----------------------------------------------------------//
    //引用 -GET_APP_KV_PAGE- 获取app分页列表（public）
    //引用 -UPDATE_APP_KV_STATUS- 更新在售车型状态
    //引用 -QUERY_PAGE- 车详情列表查询（public）
    //引用 -GET_DEF_LIST- 获取app查看车分页列表
    //引用 -GET_SERIES_LIST- 获取车系（public）
    //权益管理列表
    BUY_CAR_RIGHT_GET_LIST: {
        path: '/serviceEmp/web-api-public-buyCarRight-getList',
        resourceId: 'BUY_CAR_RIGHT_GET_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除购车权益
    DELETE_BUY_CAR: {
        path: '/serviceEmp/web-api-public-buyCarRight-deleteBuyCar',
        resourceId: 'DELETE_BUY_CAR',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取权益详情
    BUY_CAR_RIGHT_GET_DETAIL: {
        path: '/serviceEmp/web-api-public-buyCarRight-getDetail',
        resourceId: 'BUY_CAR_RIGHT_GET_DETAIL',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取奖品列表
    GET_AWARD_PAGE: {
        path: '/serviceEmp/web-api-public-awardManage-getAwardPage',
        resourceId: 'GET_AWARD_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },

    //修改购车权益
    UPDATE_BUY_CAR: {
        path: '/serviceEmp/web-api-public-vinwhite-updateBuyCar',
        resourceId: 'UPDATE_BUY_CAR',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增购车权益
    ADD_BUY_CAR: {
        path: '/serviceEmp/web-api-public-vinwhite-addBuyCar',
        resourceId: 'ADD_BUY_CAR',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------白名单管理----------------------------------------------------------//
    //查询白名单列表
    VINWHITE_GET_PAGE: {
        path: '/serviceEmp/web-api-public-vinwhite-getPage',
        resourceId: 'VINWHITE_GET_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新建白名单列表
    VINWHITE_INSERT: {
        path: '/serviceEmp/web-api-public-vinwhite-insert',
        resourceId: 'VINWHITE_INSERT',
        method: httpRequestConstants.METHOD_POST,
    },
    //更新白名单列表
    VINWHITE_UPDATE: {
        path: '/serviceEmp/web-api-public-vinwhite-update',
        resourceId: 'VINWHITE_UPDATE',
        method: httpRequestConstants.METHOD_POST,
    },
    //查询白名VIN数量
    GET_COUNT_BY_ID: {
        path: '/serviceEmp/web-api-public-vinwhite-getCountById',
        resourceId: 'GET_COUNT_BY_ID',
        method: httpRequestConstants.METHOD_POST,
    },
    //白名单删除VIN列表
    DELETE_VINS: {
        path: '/serviceEmp/web-api-public-vinwhite-deleteVins',
        resourceId: 'DELETE_VINS',
        method: httpRequestConstants.METHOD_POST,
    },

    //白名单删除列表
    VINWHITE_DELETE: {
        path: '/serviceEmp/web-api-public-vinwhite-delete',
        resourceId: 'VINWHITE_DELETE',
        method: httpRequestConstants.METHOD_POST,
    },

    //白名单添加记录
    INSERT_VINS: {
        path: '/serviceEmp/web-api-public-vinwhite-insertVins',
        resourceId: 'INSERT_VINS',
        method: httpRequestConstants.METHOD_POST,
    },

    //------------------------------------艾维亚白名单管理----------------------------------------------------------//
    //获取艾维亚白名单列表
    AVENIR_GET_PAGE: {
        path: '/serviceEmp/web-api-public-avenir-getPage',
        resourceId: 'AVENIR_GET_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除艾维亚白名单列表
    AVENIR_DELETE: {
        path: '/serviceEmp/web-api-public-avenir-delete',
        resourceId: 'AVENIR_DELETE',
        method: httpRequestConstants.METHOD_POST,
    },
    //导入艾维亚白名单列表
    INSERT_BATCH: {
        path: '/serviceEmp/web-api-public-avenir-insertBatch',
        resourceId: 'INSERT_BATCH',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------经销商扩展数据管理----------------------------------------------------------//

    //查询经销商扩展数据管理
    DEALER_EXTEND_QUERYPAGE: {
        path: '/serviceEmp/web-api-public-dealerExtend-queryPage',
        resourceId: 'DEALER_EXTEND_QUERYPAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //经销商新增修改
    DEALER_EXTEND_SUBMIT: {
        path: '/serviceEmp/web-api-public-dealerExtend-submit',
        resourceId: 'DEALER_EXTEND_SUBMIT',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------车辆扩展数据管理----------------------------------------------------------//

    //查询车辆扩展数据管理
    GET_VEHICLE_EXTEND_PAGE: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-getVehicleExtendPage',
        resourceId: 'GET_VEHICLE_EXTEND_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除车辆扩展数据管理
    DELETE_VEHICLE_EXTEND: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-deleteVehicleExtend',
        resourceId: 'DELETE_VEHICLE_EXTEND',
        method: httpRequestConstants.METHOD_POST,
    },
    //获取我的经销商管理数据
    GET_VEHICLE_EXTEND_MY_PAGE: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-getVehicleExtendMyPage',
        resourceId: 'GET_VEHICLE_EXTEND_MY_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增我的经销商
    ADD_VEHICLE_EXTEND_MY: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-addVehicleExtendMy',
        resourceId: 'ADD_VEHICLE_EXTEND_MY',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改我的经销商
    UPDATE_VEHICLE_EXTENDMY: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-updateVehicleExtendMy',
        resourceId: 'UPDATE_VEHICLE_EXTENDMY',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除我的经销商
    DELETE_VEHICLEEXTEND_MY: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-deleteVehicleExtendMy',
        resourceId: 'DELETE_VEHICLEEXTEND_MY',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改经销商扩展数据管理
    UPDATE_VEHICLE_EXTEND: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-updateVehicleExtend',
        resourceId: 'UPDATE_VEHICLE_EXTEND',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增经销商扩展数据管理
    ADD_VEHICLE_EXTEND: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-addVehicleExtend',
        resourceId: 'ADD_VEHICLE_EXTEND',
        method: httpRequestConstants.METHOD_POST,
    },
    //------------------------------------物料号管理----------------------------------------------------------//
    //获取物料号列表
    GET_VEHICLE_EXTEND_MATERIAL_PAGE: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-getVehicleExtendMaterialPage',
        resourceId: 'GET_VEHICLE_EXTEND_MATERIAL_PAGE',
        method: httpRequestConstants.METHOD_POST,
    },
    //导入物料号
    IMPORT_VEHICLE_EXTEND_MATERIALS: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-importVehicleExtendMaterials',
        resourceId: 'IMPORT_VEHICLE_EXTEND_MATERIALS',
        method: httpRequestConstants.METHOD_POST,
    },
    //删除物料号
    DELETE_VEHICLE_EXTEND_MATERIAL: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-deleteVehicleExtendMaterial',
        resourceId: 'DELETE_VEHICLE_EXTEND_MATERIAL',
        method: httpRequestConstants.METHOD_POST,
    },
    //修改物料号
    UPDATE_VEHICLE_EXTEND_MATERIAL: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-updateVehicleExtendMaterial',
        resourceId: 'UPDATE_VEHICLE_EXTEND_MATERIAL',
        method: httpRequestConstants.METHOD_POST,
    },
    //新增物料号
    ADD_VEHICLE_EXTEND_MATERIAL: {
        path: '/serviceEmp/web-api-public-vehicleExtendManage-addVehicleExtendMaterial',
        resourceId: 'ADD_VEHICLE_EXTEND_MATERIAL',
        method: httpRequestConstants.METHOD_POST,
    },
    //评论回复
    GET_BBS_AGENT_USER_LIST: {
        path: '/serviceEmp/web-api-public-bbsManage-getBBSAgentUserList',
        resourceId: 'GET_BBS_AGENT_USER_LIST',
        method: httpRequestConstants.METHOD_POST,
    },
       //回复提交
       ADD_ACTIVITY_COMMENT: {
        path: '/serviceEmp/web-api-public-activityManage-addActivityComment',
        resourceId: 'ADD_ACTIVITY_COMMENT',
        method: httpRequestConstants.METHOD_POST,
    },

    
};