"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[936],{77758:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(1413),l=n(36459),i=n(68957),o=(n(4519),n(2556)),r=function(e){var a,n=Object.assign({},((0,l.Z)(e),e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,o.jsx)(i.Z,(0,t.Z)({centered:null===(a=n.centered)||void 0===a||a,className:"bai-modal"},n))]})}},33614:function(e,a,n){n.r(a);var t=function(){var e=[{alias:null,args:[{kind:"Literal",name:"is_active",value:!0}],concreteType:"Domain",kind:"LinkedField",name:"domains",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:"domains(is_active:true)"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DomainSelectorQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"DomainSelectorQuery",selections:e},params:{cacheID:"9df762094b74dc3eb8079edfcc73765f",id:null,metadata:{},name:"DomainSelectorQuery",operationKind:"query",text:"query DomainSelectorQuery {\n  domains(is_active: true) {\n    name\n  }\n}\n"}}}();t.hash="c14d362fa40cf9a3cef5d1d71202cc5f",a.default=t},13361:function(e,a,n){n.r(a);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"domain_name"}],a=[{alias:"projects",args:[{kind:"Variable",name:"domain_name",variableName:"domain_name"},{kind:"Literal",name:"is_active",value:!0}],concreteType:"Group",kind:"LinkedField",name:"groups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ProjectSelectorQuery",selections:a,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ProjectSelectorQuery",selections:a},params:{cacheID:"eecad68ff1a08d753ce22ff2c5136c26",id:null,metadata:{},name:"ProjectSelectorQuery",operationKind:"query",text:"query ProjectSelectorQuery(\n  $domain_name: String\n) {\n  projects: groups(domain_name: $domain_name, is_active: true) {\n    id\n    is_active\n    name\n    resource_policy\n  }\n}\n"}}}();t.hash="2845b31197571f750613f64207ded239",a.default=t},81674:function(e,a,n){n.r(a);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaScopeCardFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"}],type:"QuotaScope",abstractKey:null,hash:"78fe420c92ce5b9c8d5c133d1f9c389f"};a.default=t},96685:function(e,a,n){n.r(a);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},{defaultValue:null,kind:"LocalArgument",name:"storage_host_name"}],a=[{alias:null,args:[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"UnsetQuotaScope",kind:"LinkedField",name:"unset_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"QuotaScopeCardUnsetMutation",selections:a,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"QuotaScopeCardUnsetMutation",selections:a},params:{cacheID:"338836966362b14e823520f40fa56a73",id:null,metadata:{},name:"QuotaScopeCardUnsetMutation",operationKind:"mutation",text:"mutation QuotaScopeCardUnsetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n) {\n  unset_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="272001cc642518fb66015dcc367b9f65",a.default=t},64133:function(e,a,n){n.r(a);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaSettingModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],type:"QuotaScope",abstractKey:null,hash:"1c5ad8315a2d78cb376e7436dc6a8627"};a.default=t},95005:function(e,a,n){n.r(a);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"props"},a={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},n={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{alias:null,args:[{kind:"Variable",name:"props",variableName:"props"},{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"SetQuotaScope",kind:"LinkedField",name:"set_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,a,n],kind:"Fragment",metadata:null,name:"QuotaSettingModalSetMutation",selections:t,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,n,e],kind:"Operation",name:"QuotaSettingModalSetMutation",selections:t},params:{cacheID:"d337cab9be9523bfde2bfb7d6bed595b",id:null,metadata:{},name:"QuotaSettingModalSetMutation",operationKind:"mutation",text:"mutation QuotaSettingModalSetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $props: QuotaScopeInput!\n) {\n  set_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name, props: $props) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="0e8509b3174920c1dd917ece91d41161",a.default=t},58156:function(e,a,n){n.r(a);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostResourcePanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"30a1b4101eeb2fae45385780dbc0ddcc"};a.default=t},81047:function(e,a,n){n.r(a);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},a={defaultValue:null,kind:"LocalArgument",name:"skipQuotaScope"},n={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}];return{fragment:{argumentDefinitions:[e,a,n],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"},{args:null,kind:"FragmentSpread",name:"QuotaScopeCardFragment"}],storageKey:null}]}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,n,a],kind:"Operation",name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null}],storageKey:null}]}]},params:{cacheID:"378699d92e64ba9559bfbe8e533d6c6a",id:null,metadata:{},name:"StorageHostSettingsPanelQuery",operationKind:"query",text:"query StorageHostSettingsPanelQuery(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $skipQuotaScope: Boolean!\n) {\n  quota_scope(storage_host_name: $storage_host_name, quota_scope_id: $quota_scope_id) @skip(if: $skipQuotaScope) {\n    ...QuotaSettingModalFragment\n    ...QuotaScopeCardFragment\n    id\n  }\n}\n\nfragment QuotaScopeCardFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n    usage_bytes\n  }\n  ...QuotaSettingModalFragment\n}\n\nfragment QuotaSettingModalFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n  }\n}\n"}}}();t.hash="ef16372a7f5bf0c1844a65d4b63fe4d9",a.default=t},16678:function(e,a,n){n.r(a);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanel_storageVolumeFrgmt",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"2f9e5e6060806e6f9265e5cbbd325afe"};a.default=t},54880:function(e,a,n){n.r(a);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"filter"},a={defaultValue:null,kind:"LocalArgument",name:"limit"},n={defaultValue:null,kind:"LocalArgument",name:"offset"},t=[{alias:null,args:[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Literal",name:"is_active",value:!0},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"}],concreteType:"UserList",kind:"LinkedField",name:"user_list",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,a,n],kind:"Fragment",metadata:null,name:"UserSelectorQuery",selections:t,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,n,e],kind:"Operation",name:"UserSelectorQuery",selections:t},params:{cacheID:"f552e13a727e58f49a7a7e49a466d4d2",id:null,metadata:{},name:"UserSelectorQuery",operationKind:"query",text:"query UserSelectorQuery(\n  $limit: Int!\n  $offset: Int!\n  $filter: String\n) {\n  user_list(limit: $limit, offset: $offset, filter: $filter, is_active: true) {\n    items {\n      id\n      is_active\n      email\n      resource_policy\n    }\n  }\n}\n"}}}();t.hash="323d93fb2d8eb4ee2d1d3677121f9ad2",a.default=t},31936:function(e,a,n){n.r(a),n.d(a,{default:function(){return oe}});var t,l,i,o,r,s,u,d,c,m,g,p=n(61502),_=n(99277),y=n(43255),S=n(93448),f=n(53562),v=n(28499),k=n(82548),h=n(32048),b=n.n(h),F=n(81748),x=n(16980),j=n(2556),q=function(e){var a=e.storageVolumeFrgmt,l=(0,F.$G)().t,i=(0,x.useFragment)(void 0!==t?t:t=n(58156),a),o=JSON.parse((null===i||void 0===i?void 0:i.usage)||"{}"),r=null===o||void 0===o?void 0:o.used_bytes,s=null===o||void 0===o?void 0:o.capacity_bytes,u={used_bytes:r,capacity_bytes:s,percent:Number((100*(s>0?r/s:0)).toFixed(1))};return(0,j.jsxs)(S.Z,{size:"small",bordered:!0,column:3,children:[(0,j.jsxs)(S.Z.Item,{label:l("storageHost.Usage"),span:3,children:[(null===u||void 0===u?void 0:u.percent)<100?(0,j.jsx)(f.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,strokeColor:(0,y.lA)(null===u||void 0===u?void 0:u.percent)}):(0,j.jsx)(f.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,status:"exception"}),(0,j.jsxs)(v.Z.Text,{type:"secondary",children:[l("storageHost.Used"),":"," "]}),(0,y.XG)(null===u||void 0===u?void 0:u.used_bytes),(0,j.jsx)(v.Z.Text,{type:"secondary",children:" / "}),(0,j.jsxs)(v.Z.Text,{type:"secondary",children:[l("storageHost.Total"),":"," "]}),(0,y.XG)(null===u||void 0===u?void 0:u.capacity_bytes)]}),(0,j.jsx)(S.Z.Item,{label:l("agent.Endpoint"),children:null===i||void 0===i?void 0:i.path}),(0,j.jsx)(S.Z.Item,{label:l("agent.BackendType"),children:null===i||void 0===i?void 0:i.backend}),(0,j.jsx)(S.Z.Item,{label:l("agent.Capabilities"),children:b().map(null===i||void 0===i?void 0:i.capabilities,(function(e){return(0,j.jsx)(k.Z,{children:e},e)}))})]})},Z=n(29439),K=n(87760),Q=n(1413),L=n(44925),D=n(19427),P=n(4519),V=["onSelectDomain"],H=function(e){var a=e.onSelectDomain,t=(0,L.Z)(e,V),i=(0,F.$G)().t,o=(0,x.useLazyLoadQuery)(void 0!==l?l:l=n(33614),{},{fetchPolicy:"store-and-network"}).domains;return(0,j.jsxs)(D.Z,(0,Q.Z)((0,Q.Z)({onChange:function(e,n){null===a||void 0===a||a(n)},placeholder:i("storageHost.quotaSettings.SelectDomain")},t),{},{children:[b().map(o,(function(e){return(0,j.jsx)(D.Z.Option,{domainName:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})),";"]}))},C=["onSelectProject","domain"],T=function(e){var a=e.onSelectProject,t=e.domain,l=(0,L.Z)(e,C),o=(0,F.$G)().t,r=(0,x.useLazyLoadQuery)(void 0!==i?i:i=n(13361),{domain_name:t},{fetchPolicy:"store-and-network"}).projects;return(0,j.jsx)(D.Z,(0,Q.Z)((0,Q.Z)({onChange:function(e,n){null===a||void 0===a||a(n)},placeholder:o("storageHost.quotaSettings.SelectProject")},l),{},{children:b().map(r,(function(e){return(0,j.jsx)(D.Z.Option,{projectId:null===e||void 0===e?void 0:e.id,projectResourcePolicy:null===e||void 0===e?void 0:e.resource_policy,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}))},$=n(20558),I=n(56814),M=n(31662),w=n(44036),U=n(54473),E=n(92171),A=n(83007),N=n(41366),R=n(32360),G=["quotaScopeFrgmt","showAddButtonWhenEmpty","onClickEdit"],O=function(e){var a=e.quotaScopeFrgmt,t=e.showAddButtonWhenEmpty,l=e.onClickEdit,i=((0,L.Z)(e,G),(0,F.$G)().t),s=w.Z.useToken().token,u=(0,x.useFragment)(void 0!==o?o:o=n(81674),a),d=(0,x.useMutation)(void 0!==r?r:r=n(96685)),c=(0,Z.Z)(d,2),m=c[0],g=c[1],p=(0,j.jsx)(U.Z,{style:{width:"100%"},image:U.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsx)("div",{children:i("storageHost.quotaSettings.SelectFirst")})}),S=(0,j.jsx)(U.Z,{style:{width:"100%"},image:U.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{margin:10},children:i("storageHost.quotaSettings.ClickSettingButton")}),(0,j.jsx)(E.ZP,{icon:(0,j.jsx)($.Z,{}),onClick:function(){return l&&l()},children:i("storageHost.quotaSettings.AddQuotaConfigs")})]})});return(0,j.jsx)(A.Z,{bordered:!0,rowKey:"id",columns:[{title:i("storageHost.quotaSettings.QuotaScopeId"),dataIndex:"quota_scope_id",key:"quota_scope_id",render:function(e){return(0,j.jsx)("code",{children:e})}},{title:i("storageHost.HardLimit")+" (GB)",dataIndex:["details","hard_limit_bytes"],key:"hard_limit_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,y.Uz)(e)})}},{title:i("storageHost.Usage")+" (GB)",dataIndex:["details","usage_bytes"],key:"usage_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,y.Uz)(e)})}},{title:i("general.Control"),key:"control",render:function(){return(0,j.jsxs)(_.Z,{gap:s.marginSM,children:[(0,j.jsx)(E.ZP,{icon:(0,j.jsx)(I.Z,{}),onClick:function(){return l&&l()},children:i("button.Edit")}),(0,j.jsx)(N.Z,{title:i("storageHost.quotaSettings.UnsetCustomSettings"),description:i("storageHost.quotaSettings.ConfirmUnsetCustomQuota"),placement:"bottom",onConfirm:function(){u&&m({variables:{quota_scope_id:u.quota_scope_id,storage_host_name:u.storage_host_name},onCompleted:function(){R.ZP.success(i("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated"))},onError:function(e){R.ZP.error(null===e||void 0===e?void 0:e.message)}})},children:(0,j.jsx)(E.ZP,{loading:g,danger:!0,icon:(0,j.jsx)(M.Z,{}),children:i("button.Unset")})})]})}}],dataSource:u?[u]:[],locale:{emptyText:t?S:p},pagination:!1})},z=n(77758),B=n(57054),W=n(38818),X=["quotaScopeFrgmt","onRequestClose"],J=function(e){var a,t=e.quotaScopeFrgmt,l=void 0===t?null:t,i=e.onRequestClose,o=(0,L.Z)(e,X),r=(0,F.$G)().t,d=B.Z.useForm(),c=(0,Z.Z)(d,1)[0],m=(0,x.useFragment)(void 0!==s?s:s=n(64133),l),g=(0,x.useMutation)(void 0!==u?u:u=n(95005)),p=(0,Z.Z)(g,2),_=p[0],S=p[1];return(0,j.jsx)(z.Z,(0,Q.Z)((0,Q.Z)({},o),{},{style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){c.validateFields().then((function(e){_({variables:{quota_scope_id:(null===m||void 0===m?void 0:m.quota_scope_id)||"",storage_host_name:(null===m||void 0===m?void 0:m.storage_host_name)||"",props:{hard_limit_bytes:(0,y.Hz)(null===e||void 0===e?void 0:e.hard_limit_bytes)}},onCompleted:function(e){var a,n;null!==e&&void 0!==e&&null!==(a=e.set_quota_scope)&&void 0!==a&&null!==(n=a.quota_scope)&&void 0!==n&&n.id?R.ZP.success(r("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated")):R.ZP.error(r("dialog.ErrorOccurred")),i()},onError:function(e){console.log(e),R.ZP.error(null===e||void 0===e?void 0:e.message)}})}))},confirmLoading:S,onCancel:i,title:r("storageHost.quotaSettings.QuotaSettings"),children:(0,j.jsx)(B.Z,{form:c,preserve:!1,labelCol:{span:6},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:20},children:(0,j.jsx)(B.Z.Item,{name:"hard_limit_bytes",label:r("storageHost.HardLimit"),initialValue:(0,y.Uz)(null===m||void 0===m||null===(a=m.details)||void 0===a?void 0:a.hard_limit_bytes),rules:[{pattern:/^\d+(\.\d+)?$/,message:r("storageHost.quotaSettings.AllowNumberAndDot")||"Allows numbers and .(dot) only"}],children:(0,j.jsx)(W.Z,{addonAfter:"GB",type:"number",step:.25,style:{width:"70%"}})})})}))},Y=["onSelectUser"],ee=function(e){var a=e.onSelectUser,t=(0,L.Z)(e,Y),l=(0,F.$G)().t,i=(0,P.useState)(""),o=(0,Z.Z)(i,2),r=o[0],s=o[1],u=(0,P.useDeferredValue)(r),c=(0,x.useLazyLoadQuery)(void 0!==d?d:d=n(54880),{limit:150,offset:0,filter:0===(null===u||void 0===u?void 0:u.length)?null:'email ilike "%'+u+'%"'},{fetchPolicy:"store-and-network"}).user_list;return(0,j.jsx)(D.Z,(0,Q.Z)({filterOption:!1,searchValue:r,loading:u!==r,onSearch:function(e){s(e)},onChange:function(e){a(b().find(null===c||void 0===c?void 0:c.items,(function(a){return(null===a||void 0===a?void 0:a.email)===e})))},showSearch:!0,placeholder:l("storageHost.quotaSettings.SelectUser"),options:b().map(null===c||void 0===c?void 0:c.items,(function(e){return{value:null===e||void 0===e?void 0:e.email,label:null===e||void 0===e?void 0:e.email}})).sort((function(e,a){return e.value&&a.value&&e.value>a.value?1:-1}))},t))},ae=n(63703),ne=n(53066),te=n(39883),le=function(e){var a=e.storageVolumeFrgmt,t=(0,F.$G)().t,l=(0,x.useFragment)(void 0!==c?c:c=n(16678),a),i=(0,P.useTransition)(),o=(0,Z.Z)(i,2),r=o[0],s=o[1],u=(0,K.tQ)(),d=(0,P.useState)("user"),g=(0,Z.Z)(d,2),p=g[0],S=g[1],f=(0,P.useState)(u),v=(0,Z.Z)(f,2),k=v[0],h=v[1],b=(0,P.useState)(),q=(0,Z.Z)(b,2),Q=q[0],L=q[1];(0,P.useState)();var D=(0,P.useState)(),V=(0,Z.Z)(D,2),C=V[0],$=V[1],I=(0,P.useState)(),M=(0,Z.Z)(I,2),w=M[0],U=M[1];(0,P.useState)();var E=(0,y.VQ)(p,("project"===p?Q:C)||""),A=(0,ae.Z)(!1),N=(0,Z.Z)(A,2),R=N[0],G=N[1].toggle,z=(0,K.Kr)("default"),W=(0,Z.Z)(z,1)[0],X=(0,x.useLazyLoadQuery)(void 0!==m?m:m=n(81047),{quota_scope_id:E,skipQuotaScope:void 0===E||""===E,storage_host_name:(null===l||void 0===l?void 0:l.id)||""},{fetchPolicy:"network-only",fetchKey:W}).quota_scope;return(0,j.jsx)(_.Z,{direction:"column",align:"stretch",children:(0,j.jsxs)(ne.Z,{title:t("storageHost.QuotaSettings"),tabList:[{key:"user",tab:t("storageHost.ForUser")},{key:"project",tab:t("storageHost.ForProject")}],activeTabKey:p,onTabChange:function(e){s((function(){S(e)}))},children:[(0,j.jsx)(_.Z,{justify:"between",children:"project"===p?(0,j.jsx)(_.Z,{style:{marginBottom:10},children:(0,j.jsxs)(B.Z,{layout:"inline",children:[(0,j.jsx)(B.Z.Item,{label:t("resourceGroup.Domain"),children:(0,j.jsx)(H,{style:{width:"20vw",marginRight:10},value:k,onSelectDomain:function(e){s((function(){h(null===e||void 0===e?void 0:e.domainName),L(void 0)}))}})}),(0,j.jsx)(B.Z.Item,{label:t("webui.menu.Project"),children:(0,j.jsx)(T,{style:{width:"20vw"},value:Q,disabled:!k,domain:k||"",onSelectProject:function(e){s((function(){L(null===e||void 0===e?void 0:e.projectId)}))}})})]})}):(0,j.jsx)(B.Z,{layout:"inline",children:(0,j.jsx)(B.Z.Item,{label:t("data.User"),children:(0,j.jsx)(ee,{style:{width:"30vw",marginBottom:10},value:w,onSelectUser:function(e){U(null===e||void 0===e?void 0:e.email),s((function(){$(null===e||void 0===e?void 0:e.id)}))}})})})}),(0,j.jsx)(te.Z,{spinning:r,children:(0,j.jsx)(O,{quotaScopeFrgmt:X||null,onClickEdit:function(){G()},showAddButtonWhenEmpty:"project"===p&&!!Q||"user"===p&&!!C})}),(0,j.jsx)(J,{open:R,quotaScopeFrgmt:X||null,onRequestClose:function(){G()}})]})})},ie=n(60284),oe=function(e){var a,t,l=e.storageHostId,i=w.Z.useToken().token,o=(0,K.Dj)(),r=(0,p.useWebComponentInfo)().moveTo,s=(0,F.$G)().t,u=(0,x.useLazyLoadQuery)(void 0!==g?g:g=n(62913),{id:l||""}).storage_volume,d=null!==(a=null===u||void 0===u||null===(t=u.capabilities)||void 0===t?void 0:t.includes("quota"))&&void 0!==a&&a;return(0,j.jsxs)(_.Z,{direction:"column",align:"stretch",style:{margin:i.marginSM,gap:i.margin},children:[(0,j.jsx)(ie.Z,{items:[{title:"Resources",onClick:function(e){e.preventDefault(),r("/agent")},href:"/agent"},{title:"Storage setting"}]}),(0,j.jsx)(v.Z.Title,{level:3,style:{margin:0},children:l||""}),(0,j.jsx)(q,{storageVolumeFrgmt:u||null}),o.supports("quota-scope")&&(0,j.jsx)(j.Fragment,{children:d?(0,j.jsx)(P.Suspense,{fallback:(0,j.jsx)("div",{children:"loading..."}),children:(0,j.jsx)(le,{storageVolumeFrgmt:u||null})}):(0,j.jsx)(ne.Z,{title:s("storageHost.QuotaSettings"),children:(0,j.jsx)(U.Z,{image:U.Z.PRESENTED_IMAGE_SIMPLE,description:s("storageHost.QuotaDoesNotSupported")})})})]})}},62913:function(e,a,n){n.r(a);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"}],a=[{kind:"Variable",name:"id",variableName:"id"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"StorageHostSettingPageQuery",selections:[{alias:null,args:a,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[n,t,{args:null,kind:"FragmentSpread",name:"StorageHostResourcePanelFragment"},{args:null,kind:"FragmentSpread",name:"StorageHostSettingsPanel_storageVolumeFrgmt"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"StorageHostSettingPageQuery",selections:[{alias:null,args:a,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[n,t,{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],storageKey:null}]},params:{cacheID:"821175f86743d9d81be2a55aca371919",id:null,metadata:{},name:"StorageHostSettingPageQuery",operationKind:"query",text:"query StorageHostSettingPageQuery(\n  $id: String\n) {\n  storage_volume(id: $id) {\n    id\n    capabilities\n    ...StorageHostResourcePanelFragment\n    ...StorageHostSettingsPanel_storageVolumeFrgmt\n  }\n}\n\nfragment StorageHostResourcePanelFragment on StorageVolume {\n  id\n  backend\n  capabilities\n  path\n  usage\n}\n\nfragment StorageHostSettingsPanel_storageVolumeFrgmt on StorageVolume {\n  id\n  capabilities\n}\n"}}}();t.hash="f6e77057e83b0449ef99e8918e794b24",a.default=t}}]);
//# sourceMappingURL=936.6e14cca8.chunk.js.map