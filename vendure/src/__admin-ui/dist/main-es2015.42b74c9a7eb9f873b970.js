    fragment Role on Role {
        id
        createdAt
        updatedAt
        code
        description
        permissions
        channels {
            id
            code
            token
        }
    }
`,Tf=H.gql`
    fragment Administrator on Administrator {
        id
        createdAt
        updatedAt
        firstName
        lastName
        emailAddress
        user {
            id
            identifier
            lastLogin
            roles {
                ...Role
            }
        }
    }
    ${Pf}
`,Rf=H.gql`
    query GetAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
            items {
                ...Administrator
            }
            totalItems
        }
    }
    ${Tf}
`,Zf=H.gql`
    query GetActiveAdministrator {
        activeAdministrator {
            ...Administrator
        }
    }
    ${Tf}
`,Nf=H.gql`
    query GetAdministrator($id: ID!) {
        administrator(id: $id) {
            ...Administrator
        }
    }
    ${Tf}
`,Ff=H.gql`
    mutation CreateAdministrator($input: CreateAdministratorInput!) {
        createAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Tf}
`,jf=H.gql`
    mutation UpdateAdministrator($input: UpdateAdministratorInput!) {
        updateAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Tf}
`,Bf=H.gql`
    mutation UpdateActiveAdministrator($input: UpdateActiveAdministratorInput!) {
        updateActiveAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Tf}
`,zf=H.gql`
    mutation DeleteAdministrator($id: ID!) {
        deleteAdministrator(id: $id) {
            result
            message
        }
    }
`,Uf=H.gql`
    query GetRoles($options: RoleListOptions) {
        roles(options: $options) {
            items {
                ...Role
            }
            totalItems
        }
    }
    ${Pf}
`,$f=H.gql`
    query GetRole($id: ID!) {
        role(id: $id) {
            ...Role
        }
    }
    ${Pf}
`,qf=H.gql`
    mutation CreateRole($input: CreateRoleInput!) {
        createRole(input: $input) {
            ...Role
        }
    }
    ${Pf}
`,Gf=H.gql`
    mutation UpdateRole($input: UpdateRoleInput!) {
        updateRole(input: $input) {
            ...Role
        }
    }
    ${Pf}
`,Wf=H.gql`
    mutation DeleteRole($id: ID!) {
        deleteRole(id: $id) {
            result
            message
        }
    }
`;H.gql`
    mutation AssignRoleToAdministrator($administratorId: ID!, $roleId: ID!) {
        assignRoleToAdministrator(administratorId: $administratorId, roleId: $roleId) {
            ...Administrator
        }
    }
    ${Tf}
`;class Yf{constructor(e){this.baseDataService=e}getAdministrators(e=10,t=0){return this.baseDataService.query(Rf,{options:{take:e,skip:t}})}getActiveAdministrator(e="cache-first"){return this.baseDataService.query(Zf,{},e)}getAdministrator(e){return this.baseDataService.query(Nf,{id:e})}createAdministrator(e){return this.baseDataService.mutate(Ff,{input:e})}updateAdministrator(e){return this.baseDataService.mutate(jf,{input:e})}updateActiveAdministrator(e){return this.baseDataService.mutate(Bf,{input:e})}deleteAdministrator(e){return this.baseDataService.mutate(zf,{id:e})}getRoles(e=10,t=0){return this.baseDataService.query(Uf,{options:{take:e,skip:t}})}getRole(e){return this.baseDataService.query($f,{id:e})}createRole(e){return this.baseDataService.mutate(qf,{input:e})}updateRole(e){return this.baseDataService.mutate(Gf,{input:e})}deleteRole(e){return this.baseDataService.mutate(Wf,{id:e})}}const Qf=H.gql`
    fragment ConfigurableOperation on ConfigurableOperation {
        args {
            name
            value
        }
        code
    }
`,Xf=H.gql`
    fragment ConfigurableOperationDef on ConfigurableOperationDefinition {
        args {
            name
            type
            list
            ui
            label
        }
        code
        description
    }
`,Kf=H.gql`
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`,Jf=H.gql`
    fragment CurrentUser on CurrentUser {
        id
        identifier
        channels {
            id
            code
            token
            permissions
        }
    }
`,eg=H.gql`
    mutation AttemptLogin($username: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...CurrentUser
            ...ErrorResult
        }
    }
    ${Jf}
    ${Kf}
`,tg=H.gql`
    mutation LogOut {
        logout {
            success
        }
    }
`,ng=H.gql`
    query GetCurrentUser {
        me {
            ...CurrentUser
        }
    }
    ${Jf}
`;class rg{constructor(e){this.baseDataService=e}currentUser(){return this.baseDataService.query(ng)}attemptLogin(e,t,n){return this.baseDataService.mutate(eg,{username:e,password:t,rememberMe:n})}logOut(){return this.baseDataService.mutate(tg)}}class ig{constructor(e){this.location=e}set(e,t){const n=this.keyName(e);localStorage.setItem(n,JSON.stringify(t))}setForCurrentLocation(e,t){const n=this.getLocationBasedKey(e);this.set(n,t)}setForSession(e,t){const n=this.keyName(e);sessionStorage.setItem(n,JSON.stringify(t))}get(e){const t=this.keyName(e),n=sessionStorage.getItem(t)||localStorage.getItem(t);let r;try{r=JSON.parse(n||"null")}catch(i){console.error(`Could not parse the localStorage value for "${e}" (${n})`)}return r}getForCurrentLocation(e){const t=this.getLocationBasedKey(e);return this.get(t)}remove(e){const t=this.keyName(e);sessionStorage.removeItem(t),localStorage.removeItem(t)}getLocationBasedKey(e){return e+this.location.path()}keyName(e){return"vnd_"+e}}ig.\u0275fac=function(e){return new(e||ig)(r.mc(i.l))},ig.\u0275prov=Object(r.Yb)({factory:function(){return new ig(Object(r.mc)(i.l))},token:ig,providedIn:"root"}),ig.ctorParameters=()=>[{type:i.l}];const sg=H.gql`
    mutation RequestStarted {
        requestStarted @client
    }
`,ag=H.gql`
    mutation RequestCompleted {
        requestCompleted @client
    }
`,og=H.gql`
    fragment UserStatus on UserStatus {
        username
        isLoggedIn
        loginTime
        activeChannelId
        permissions
        channels {
            id
            code
            token
            permissions
        }
    }
`,cg=H.gql`
    mutation SetAsLoggedIn($input: UserStatusInput!) {
        setAsLoggedIn(input: $input) @client {
            ...UserStatus
        }
    }
    ${og}
`,lg=H.gql`
    mutation SetAsLoggedOut {
        setAsLoggedOut @client {
            ...UserStatus
        }
    }
    ${og}
`,ug=H.gql`
    mutation SetUiLanguage($languageCode: LanguageCode!) {
        setUiLanguage(languageCode: $languageCode) @client
    }
`,hg=H.gql`
    mutation SetUiTheme($theme: String!) {
        setUiTheme(theme: $theme) @client
    }
`,dg=H.gql`
    query GetNetworkStatus {
        networkStatus @client {
            inFlightRequests
        }
    }
`,pg=H.gql`
    query GetUserStatus {
        userStatus @client {
            ...UserStatus
        }
    }
    ${og}
`,fg=H.gql`
    query GetUiState {
        uiState @client {
            language
            theme
        }
    }
`,gg=H.gql`
    query GetClientState {
        networkStatus @client {
            inFlightRequests
        }
        userStatus @client {
            ...UserStatus
        }
        uiState @client {
            language
            theme
        }
    }
    ${og}
`,mg=H.gql`
    mutation SetActiveChannel($channelId: ID!) {
        setActiveChannel(channelId: $channelId) @client {
            ...UserStatus
        }
    }
    ${og}
`,yg=H.gql`
    mutation UpdateUserChannels($channels: [CurrentUserChannelInput!]!) {
        updateUserChannels(channels: $channels) @client {
            ...UserStatus
        }
    }
    ${og}
`;class bg{constructor(e,t){this.queryRef=e,this.apollo=t,this.completed$=new Fe.a,this.valueChanges=e.valueChanges}refetchOnChannelChange(){const e=this.apollo.watchQuery({query:pg}).valueChanges,t=e.pipe(Object(s.a)(e=>e.data.userStatus.activeChannelId),Object(a.a)(Ne.notNullOrUndefined),Object(o.a)(),l(1),Object(d.a)(this.completed$)),n=e.pipe(Object(s.a)(e=>e.data.userStatus.isLoggedIn),Object(o.a)(),l(1),Object(a.a)(e=>!e),Object(d.a)(this.completed$));return this.valueChanges=Object(je.a)(t,this.queryRef.valueChanges).pipe(Object(p.a)(e=>{"string"==typeof e&&new Promise(e=>setTimeout(e,50)).then(()=>this.queryRef.refetch())}),Object(a.a)(e=>"string"!=typeof e),Object(d.a)(n),Object(d.a)(this.completed$)),this.queryRef.valueChanges=this.valueChanges,this}get single$(){return this.valueChanges.pipe(Object(a.a)(e=>e.networkStatus===H.NetworkStatus.ready),Object(f.a)(1),Object(s.a)(e=>e.data),Object(g.a)(()=>{this.completed$.next(),this.completed$.complete()}))}get stream$(){return this.valueChanges.pipe(Object(a.a)(e=>e.networkStatus===H.NetworkStatus.ready),Object(s.a)(e=>e.data),Object(g.a)(()=>{this.completed$.next(),this.completed$.complete()}))}get ref(){return this.queryRef}mapSingle(e){return this.single$.pipe(Object(s.a)(e))}mapStream(e){return this.stream$.pipe(Object(s.a)(e))}}const vg=H.gql`
    fragment Country on Country {
        id
        createdAt
        updatedAt
        code
        name
        enabled
        translations {
            id
            languageCode
            name
        }
    }
`,Cg=H.gql`
    query GetCountryList($options: CountryListOptions) {
        countries(options: $options) {
            items {
                id
                code
                name
                enabled
            }
            totalItems
        }
    }
`,Sg=H.gql`
    query GetAvailableCountries {
        countries(options: { filter: { enabled: { eq: true } } }) {
            items {
                id
                code
                name
                enabled
            }
        }
    }
`,wg=H.gql`
    query GetCountry($id: ID!) {
        country(id: $id) {
            ...Country
        }
    }
    ${vg}
`,_g=H.gql`
    mutation CreateCountry($input: CreateCountryInput!) {
        createCountry(input: $input) {
            ...Country
        }
    }
    ${vg}
`,Ag=H.gql`
    mutation UpdateCountry($input: UpdateCountryInput!) {
        updateCountry(input: $input) {
            ...Country
        }
    }
    ${vg}
`,Og=H.gql`
    mutation DeleteCountry($id: ID!) {
        deleteCountry(id: $id) {
            result
            message
        }
    }
`,xg=H.gql`
    fragment Zone on Zone {
        id
        name
        members {
            ...Country
        }
    }
    ${vg}
`,Mg=H.gql`
    query GetZones {
        zones {
            id
            createdAt
            updatedAt
            name
            members {
                createdAt
                updatedAt
                id
                name
                code
                enabled
            }
        }
    }
`,Vg=(H.gql`
    query GetZone($id: ID!) {
        zone(id: $id) {
            ...Zone
        }
    }
    ${xg}
`,H.gql`
    mutation CreateZone($input: CreateZoneInput!) {
        createZone(input: $input) {
            ...Zone
        }
    }
    ${xg}
`),Eg=H.gql`
    mutation UpdateZone($input: UpdateZoneInput!) {
        updateZone(input: $input) {
            ...Zone
        }
    }
    ${xg}
`,Dg=H.gql`
    mutation DeleteZone($id: ID!) {
        deleteZone(id: $id) {
            message
            result
        }
    }
`,Lg=H.gql`
    mutation AddMembersToZone($zoneId: ID!, $memberIds: [ID!]!) {
        addMembersToZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${xg}
`,kg=H.gql`
    mutation RemoveMembersFromZone($zoneId: ID!, $memberIds: [ID!]!) {
        removeMembersFromZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${xg}
`,Ig=H.gql`
    fragment TaxCategory on TaxCategory {
        id
        createdAt
        updatedAt
        name
    }
`,Hg=H.gql`
    query GetTaxCategories {
        taxCategories {
            ...TaxCategory
        }
    }
    ${Ig}
`,Pg=H.gql`
    query GetTaxCategory($id: ID!) {
        taxCategory(id: $id) {
            ...TaxCategory
        }
    }
    ${Ig}
`,Tg=H.gql`
    mutation CreateTaxCategory($input: CreateTaxCategoryInput!) {
        createTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${Ig}
`,Rg=H.gql`
    mutation UpdateTaxCategory($input: UpdateTaxCategoryInput!) {
        updateTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${Ig}
`,Zg=H.gql`
    mutation DeleteTaxCategory($id: ID!) {
        deleteTaxCategory(id: $id) {
            result
            message
        }
    }
`,Ng=H.gql`
    fragment TaxRate on TaxRate {
        id
        createdAt
        updatedAt
        name
        enabled
        value
        category {
            id
            name
        }
        zone {
            id
            name
        }
        customerGroup {
            id
            name
        }
    }
`,Fg=H.gql`
    query GetTaxRateList($options: TaxRateListOptions) {
        taxRates(options: $options) {
            items {
                ...TaxRate
            }
            totalItems
        }
    }
    ${Ng}
`,jg=H.gql`
    query GetTaxRate($id: ID!) {
        taxRate(id: $id) {
            ...TaxRate
        }
    }
    ${Ng}
`,Bg=H.gql`
    mutation CreateTaxRate($input: CreateTaxRateInput!) {
        createTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Ng}
`,zg=H.gql`
    mutation UpdateTaxRate($input: UpdateTaxRateInput!) {
        updateTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Ng}
`,Ug=H.gql`
    mutation DeleteTaxRate($id: ID!) {
        deleteTaxRate(id: $id) {
            result
            message
        }
    }
`,$g=H.gql`
    fragment Channel on Channel {
        id
        createdAt
        updatedAt
        code
        token
        pricesIncludeTax
        currencyCode
        defaultLanguageCode
        defaultShippingZone {
            id
            name
        }
        defaultTaxZone {
            id
            name
        }
    }
`,qg=H.gql`
    query GetChannels {
        channels {
            ...Channel
        }
    }
    ${$g}
`,Gg=H.gql`
    query GetChannel($id: ID!) {
        channel(id: $id) {
            ...Channel
        }
    }
    ${$g}
`,Wg=H.gql`
    query GetActiveChannel {
        activeChannel {
            ...Channel
        }
    }
    ${$g}
`,Yg=H.gql`
    mutation CreateChannel($input: CreateChannelInput!) {
        createChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${$g}
    ${Kf}
`,Qg=H.gql`
    mutation UpdateChannel($input: UpdateChannelInput!) {
        updateChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${$g}
    ${Kf}
`,Xg=H.gql`
    mutation DeleteChannel($id: ID!) {
        deleteChannel(id: $id) {
            result
            message
        }
    }
`,Kg=H.gql`
    fragment PaymentMethod on PaymentMethod {
        id
        createdAt
        updatedAt
        code
        enabled
        configArgs {
            name
            value
        }
        definition {
            ...ConfigurableOperationDef
        }
    }
    ${Xf}
`,Jg=H.gql`
    query GetPaymentMethodList($options: PaymentMethodListOptions!) {
        paymentMethods(options: $options) {
            items {
                ...PaymentMethod
            }
            totalItems
        }
    }
    ${Kg}
`,em=H.gql`
    query GetPaymentMethod($id: ID!) {
        paymentMethod(id: $id) {
            ...PaymentMethod
        }
    }
    ${Kg}
`,tm=H.gql`
    mutation UpdatePaymentMethod($input: UpdatePaymentMethodInput!) {
        updatePaymentMethod(input: $input) {
            ...PaymentMethod
        }
    }
    ${Kg}
`,nm=H.gql`
    fragment GlobalSettings on GlobalSettings {
        id
        availableLanguages
        trackInventory
        outOfStockThreshold
        serverConfig {
            permissions {
                name
                description
                assignable
            }
            orderProcess {
                name
            }
        }
    }
`,rm=H.gql`
    query GetGlobalSettings {
        globalSettings {
            ...GlobalSettings
        }
    }
    ${nm}
`,im=H.gql`
    mutation UpdateGlobalSettings($input: UpdateGlobalSettingsInput!) {
        updateGlobalSettings(input: $input) {
            ...GlobalSettings
            ...ErrorResult
        }
    }
    ${nm}
    ${Kf}
`,sm=H.gql`
    fragment CustomFieldConfig on CustomField {
        name
        type
        list
        description {
            languageCode
            value
        }
        label {
            languageCode
            value
        }
        readonly
    }
`,am=H.gql`
    fragment StringCustomField on StringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
        options {
            label {
                languageCode
                value
            }
            value
        }
    }
    ${sm}
`,om=H.gql`
    fragment LocaleStringCustomField on LocaleStringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
    }
    ${sm}
`,cm=H.gql`
    fragment BooleanCustomField on BooleanCustomFieldConfig {
        ...CustomFieldConfig
    }
    ${sm}
`,lm=H.gql`
    fragment IntCustomField on IntCustomFieldConfig {
        ...CustomFieldConfig
        intMin: min
        intMax: max
        intStep: step
    }
    ${sm}
`,um=H.gql`
    fragment FloatCustomField on FloatCustomFieldConfig {
        ...CustomFieldConfig
        floatMin: min
        floatMax: max
        floatStep: step
    }
    ${sm}
`,hm=H.gql`
    fragment DateTimeCustomField on DateTimeCustomFieldConfig {
        ...CustomFieldConfig
        datetimeMin: min
        datetimeMax: max
        datetimeStep: step
    }
    ${sm}
`,dm=H.gql`
    fragment CustomFields on CustomField {
        ... on StringCustomFieldConfig {
            ...StringCustomField
        }
        ... on LocaleStringCustomFieldConfig {
            ...LocaleStringCustomField
        }
        ... on BooleanCustomFieldConfig {
            ...BooleanCustomField
        }
        ... on IntCustomFieldConfig {
            ...IntCustomField
        }
        ... on FloatCustomFieldConfig {
            ...FloatCustomField
        }
        ... on DateTimeCustomFieldConfig {
            ...DateTimeCustomField
        }
    }
    ${am}
    ${om}
    ${cm}
    ${lm}
    ${um}
    ${hm}
`,pm=H.gql`
    query GetServerConfig {
        globalSettings {
            id
            serverConfig {
                orderProcess {
                    name
                    to
                }
                permittedAssetTypes
                permissions {
                    name
                    description
                    assignable
                }
                customFieldConfig {
                    Address {
                        ...CustomFields
                    }
                    Collection {
                        ...CustomFields
                    }
                    Customer {
                        ...CustomFields
                    }
                    Facet {
                        ...CustomFields
                    }
                    FacetValue {
                        ...CustomFields
                    }
                    Fulfillment {
                        ...CustomFields
                    }
                    GlobalSettings {
                        ...CustomFields
                    }
                    Order {
                        ...CustomFields
                    }
                    OrderLine {
                        ...CustomFields
                    }
                    Product {
                        ...CustomFields
                    }
                    ProductOption {
                        ...CustomFields
                    }
                    ProductOptionGroup {
                        ...CustomFields
                    }
                    ProductVariant {
                        ...CustomFields
                    }
                    ShippingMethod {
                        ...CustomFields
                    }
                    User {
                        ...CustomFields
                    }
                }
            }
        }
    }
    ${dm}
`,fm=H.gql`
    fragment JobInfo on Job {
        id
        createdAt
        startedAt
        settledAt
        queueName
        state
        isSettled
        progress
        duration
        data
        result
        error
    }
`,gm=H.gql`
    query GetJobInfo($id: ID!) {
        job(jobId: $id) {
            ...JobInfo
        }
    }
    ${fm}
`,mm=H.gql`
    query GetAllJobs($options: JobListOptions) {
        jobs(options: $options) {
            items {
                ...JobInfo
            }
            totalItems
        }
    }
    ${fm}
`,ym=H.gql`
    query GetJobsById($ids: [ID!]!) {
        jobsById(jobIds: $ids) {
            ...JobInfo
        }
    }
    ${fm}
`,bm=H.gql`
    query GetJobQueueList {
        jobQueues {
            name
            running
        }
    }
`,vm=H.gql`
    mutation CancelJob($id: ID!) {
        cancelJob(jobId: $id) {
            ...JobInfo
        }
    }
    ${fm}
`,Cm=H.gql`
    mutation Reindex {
        reindex {
            ...JobInfo
        }
    }
    ${fm}
`;class Sm{constructor(e){this.injector=e,this._serverConfig={}}get baseDataService(){return this.injector.get(km)}init(){return()=>this.getServerConfig()}getServerConfig(){return this.baseDataService.query(pm).single$.toPromise().then(e=>{this._serverConfig=e.globalSettings.serverConfig},e=>{})}getAvailableLanguages(){return this.baseDataService.query(rm,{},"cache-first").mapSingle(e=>e.globalSettings.availableLanguages)}refreshGlobalSettings(){return this.baseDataService.query(rm,{},"network-only").single$}getCustomFieldsFor(e){return this.serverConfig.customFieldConfig[e]||[]}getOrderProcessStates(){return this.serverConfig.orderProcess}getPermittedAssetTypes(){return this.serverConfig.permittedAssetTypes}getPermissionDefinitions(){return this.serverConfig.permissions}get serverConfig(){return this._serverConfig}}function wm(e,t){const n=e.definitions.filter(_m);for(const r of n){let e=r.typeCondition.name.value;"OrderAddress"===e&&(e="Address");const n=t[e];if(n&&n.length){r.selectionSet.selections.push({name:{kind:Qe.a.NAME,value:"customFields"},kind:Qe.a.FIELD,selectionSet:{kind:Qe.a.SELECTION_SET,selections:n.map(e=>({kind:Qe.a.FIELD,name:{kind:Qe.a.NAME,value:e.name}}))}});const e=n.filter(e=>"localeString"===e.type),t=r.selectionSet.selections.filter(Am).find(e=>"translations"===e.name.value);e.length&&t&&t.selectionSet&&t.selectionSet.selections.push({name:{kind:Qe.a.NAME,value:"customFields"},kind:Qe.a.FIELD,selectionSet:{kind:Qe.a.SELECTION_SET,selections:e.map(e=>({kind:Qe.a.FIELD,name:{kind:Qe.a.NAME,value:e.name}}))}})}}return e}function _m(e){return e.kind===Qe.a.FRAGMENT_DEFINITION}function Am(e){return e.kind===Qe.a.FIELD}Sm.\u0275fac=function(e){return new(e||Sm)(r.mc(r.C))},Sm.\u0275prov=r.Yb({token:Sm,factory:Sm.\u0275fac}),Sm.ctorParameters=()=>[{type:r.C}];const Om=/Create([A-Za-z]+)Input/,xm=/Update([A-Za-z]+)Input/;function Mm(e){const t=function(e,t){for(var n=null,r=0,i=e.definitions;r<i.length;r++){var s,a=i[r];if(a.kind===Qe.a.OPERATION_DEFINITION)if(null==t){if(n)return null;n=a}else if((null===(s=a.name)||void 0===s?void 0:s.value)===t)return a}return n}(e,null);if(t&&t.variableDefinitions)for(const n of t.variableDefinitions){const e=Vm(n.type).name.value,t=e.match(Om);if(t)return t[1];const r=e.match(xm);if(r)return r[1]}}function Vm(e){return"NonNullType"===e.kind||"ListType"===e.kind?Vm(e.type):e}function Em(e,t){for(const n of t)if(n.readonly)if("localeString"===n.type){if(Lm(e))for(const t of e.translations)Dm(t)&&void 0!==t.customFields[n.name]&&delete t.customFields[n.name]}else Dm(e)&&void 0!==e.customFields[n.name]&&delete e.customFields[n.name];return e}function Dm(e){return null!=e&&e.hasOwnProperty("customFields")}function Lm(e){return null!=e&&e.hasOwnProperty("translations")}class km{constructor(e,t,n,r){this.apollo=e,this.httpClient=t,this.localStorageService=n,this.serverConfigService=r}get customFields(){return this.serverConfigService.serverConfig.customFieldConfig||{}}query(e,t,n="cache-and-network"){const r=wm(e,this.customFields),i=this.apollo.watchQuery({query:r,variables:t,fetchPolicy:n});return new bg(i,this.apollo)}mutate(e,t,n){const r=wm(e,this.customFields),i=this.removeReadonlyCustomFieldsFromVariables(e,t);return this.apollo.mutate({mutation:r,variables:i,update:n}).pipe(Object(s.a)(e=>e.data))}removeReadonlyCustomFieldsFromVariables(e,t){const n=Mm(e);if(n){const e=this.customFields[n];if(t&&e)return function(e,t){const n=Object(Ke.simpleDeepClone)(e);return n.input&&Em(n.input,t),Em(n,t)}(t,e)}return t}}km.\u0275fac=function(e){return new(e||km)(r.mc(Y),r.mc(ye),r.mc(ig),r.mc(Sm))},km.\u0275prov=r.Yb({token:km,factory:km.\u0275fac}),km.ctorParameters=()=>[{type:Y},{type:ye},{type:ig},{type:Sm}];class Im{constructor(e){this.baseDataService=e}startRequest(){return this.baseDataService.mutate(sg)}completeRequest(){return this.baseDataService.mutate(ag)}getNetworkStatus(){return this.baseDataService.query(dg,{},"cache-first")}loginSuccess(e,t,n){return this.baseDataService.mutate(cg,{input:{username:e,loginTime:Date.now().toString(),activeChannelId:t,channels:n}})}logOut(){return this.baseDataService.mutate(lg)}userStatus(){return this.baseDataService.query(pg,{},"cache-first")}uiState(){return this.baseDataService.query(fg,{},"cache-first")}setUiLanguage(e){return this.baseDataService.mutate(ug,{languageCode:e})}setUiTheme(e){return this.baseDataService.mutate(hg,{theme:e})}setActiveChannel(e){return this.baseDataService.mutate(mg,{channelId:e})}updateUserChannels(e){return this.baseDataService.mutate(yg,{channels:e})}}const Hm=H.gql`
    fragment Asset on Asset {
        id
        createdAt
        updatedAt
        name
        fileSize
        mimeType
        type
        preview
        source
        width
        height
        focalPoint {
            x
            y
        }
    }
`,Pm=H.gql`
    fragment ProductOptionGroup on ProductOptionGroup {
        id
        code
        languageCode
        name
        translations {
            id
            languageCode
            name
        }
    }
`,Tm=H.gql`
    fragment ProductOption on ProductOption {
        id
        code
        languageCode
        name
        groupId
        translations {
            id
            languageCode
            name
        }
    }
`,Rm=H.gql`
    fragment ProductVariant on ProductVariant {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        price
        currencyCode
        priceWithTax
        stockOnHand
        stockAllocated
        trackInventory
        outOfStockThreshold
        useGlobalOutOfStockThreshold
        taxRateApplied {
            id
            name
            value
        }
        taxCategory {
            id
            name
        }
        sku
        options {
            ...ProductOption
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
        }
        channels {
            id
            code
        }
    }
    ${Tm}
    ${Hm}
`,Zm=H.gql`
    fragment ProductWithVariants on Product {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        slug
        description
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        optionGroups {
            ...ProductOptionGroup
        }
        variants {
            ...ProductVariant
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        channels {
            id
            code
        }
    }
    ${Pm}
    ${Rm}
    ${Hm}
`,Nm=H.gql`
    fragment ProductOptionGroupWithOptions on ProductOptionGroup {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            name
        }
        options {
            id
            languageCode
            name
            code
            translations {
                name
            }
        }
    }
`,Fm=H.gql`
    mutation UpdateProduct($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            ...ProductWithVariants
        }
    }
    ${Zm}
`,jm=H.gql`
    mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
            ...ProductWithVariants
        }
    }
    ${Zm}
`,Bm=H.gql`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            result
            message
        }
    }
`,zm=H.gql`
    mutation CreateProductVariants($input: [CreateProductVariantInput!]!) {
        createProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${Rm}
`,Um=H.gql`
    mutation UpdateProductVariants($input: [UpdateProductVariantInput!]!) {
        updateProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${Rm}
`,$m=H.gql`
    mutation CreateProductOptionGroup($input: CreateProductOptionGroupInput!) {
        createProductOptionGroup(input: $input) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${Nm}
`,qm=H.gql`
    query GetProductOptionGroup($id: ID!) {
        productOptionGroup(id: $id) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${Nm}
`,Gm=H.gql`
    mutation AddOptionToGroup($input: CreateProductOptionInput!) {
        createProductOption(input: $input) {
            id
            createdAt
            updatedAt
            name
            code
            groupId
        }
    }
`,Wm=H.gql`
    mutation AddOptionGroupToProduct($productId: ID!, $optionGroupId: ID!) {
        addOptionGroupToProduct(productId: $productId, optionGroupId: $optionGroupId) {
            id
            createdAt
            updatedAt
            optionGroups {
                id
                createdAt
                updatedAt
                code
                options {
                    id
                    createdAt
                    updatedAt
                    code
                }
            }
        }
    }
`,Ym=H.gql`
    mutation RemoveOptionGroupFromProduct($productId: ID!, $optionGroupId: ID!) {
        removeOptionGroupFromProduct(productId: $productId, optionGroupId: $optionGroupId) {
            ... on Product {
                id
                createdAt
                updatedAt
                optionGroups {
                    id
                    createdAt
                    updatedAt
                    code
                    options {
                        id
                        createdAt
                        updatedAt
                        code
                    }
                }
            }
            ...ErrorResult
        }
    }
    ${Kf}
`,Qm=H.gql`
    query GetProductWithVariants($id: ID!) {
        product(id: $id) {
            ...ProductWithVariants
        }
    }
    ${Zm}
`,Xm=H.gql`
    query GetProductList($options: ProductListOptions) {
        products(options: $options) {
            items {
                id
                createdAt
                updatedAt
                enabled
                languageCode
                name
                slug
                featuredAsset {
                    id
                    createdAt
                    updatedAt
                    preview
                }
            }
            totalItems
        }
    }
`,Km=H.gql`
    query GetProductOptionGroups($filterTerm: String) {
        productOptionGroups(filterTerm: $filterTerm) {
            id
            createdAt
            updatedAt
            languageCode
            code
            name
            options {
                id
                createdAt
                updatedAt
                languageCode
                code
                name
            }
        }
    }
`,Jm=H.gql`
    query GetAssetList($options: AssetListOptions) {
        assets(options: $options) {
            items {
                ...Asset
            }
            totalItems
        }
    }
    ${Hm}
`,ey=H.gql`
    query GetAsset($id: ID!) {
        asset(id: $id) {
            ...Asset
        }
    }
    ${Hm}
`,ty=H.gql`
    mutation CreateAssets($input: [CreateAssetInput!]!) {
        createAssets(input: $input) {
            ...Asset
            ... on ErrorResult {
                message
            }
        }
    }
    ${Hm}
`,ny=H.gql`
    mutation UpdateAsset($input: UpdateAssetInput!) {
        updateAsset(input: $input) {
            ...Asset
        }
    }
    ${Hm}
`,ry=H.gql`
    mutation DeleteAssets($ids: [ID!]!, $force: Boolean) {
        deleteAssets(ids: $ids, force: $force) {
            result
            message
        }
    }
`,iy=H.gql`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            totalItems
            items {
                enabled
                productId
                productName
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                productVariantId
                productVariantName
                productVariantAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                sku
                channelIds
            }
            facetValues {
                count
                facetValue {
                    id
                    createdAt
                    updatedAt
                    name
                    facet {
                        id
                        createdAt
                        updatedAt
                        name
                    }
                }
            }
        }
    }
`,sy=H.gql`
    query ProductSelectorSearch($term: String!, $take: Int!) {
        search(input: { groupByProduct: false, term: $term, take: $take }) {
            items {
                productVariantId
                productVariantName
                productPreview
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                price {
                    ... on SinglePrice {
                        value
                    }
                }
                priceWithTax {
                    ... on SinglePrice {
                        value
                    }
                }
                sku
            }
        }
    }
`,ay=H.gql`
    mutation UpdateProductOption($input: UpdateProductOptionInput!) {
        updateProductOption(input: $input) {
            ...ProductOption
        }
    }
    ${Tm}
`,oy=H.gql`
    mutation DeleteProductVariant($id: ID!) {
        deleteProductVariant(id: $id) {
            result
            message
        }
    }
`,cy=H.gql`
    query GetProductVariantOptions($id: ID!) {
        product(id: $id) {
            id
            createdAt
            updatedAt
            name
            optionGroups {
                id
                name
                code
                options {
                    ...ProductOption
                }
            }
            variants {
                id
                createdAt
                updatedAt
                enabled
                name
                sku
                price
                stockOnHand
                enabled
                options {
                    id
                    createdAt
                    updatedAt
                    name
                    code
                    groupId
                }
            }
        }
    }
    ${Tm}
`,ly=H.gql`
    mutation AssignProductsToChannel($input: AssignProductsToChannelInput!) {
        assignProductsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,uy=H.gql`
    mutation AssignVariantsToChannel($input: AssignProductVariantsToChannelInput!) {
        assignProductVariantsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,hy=H.gql`
    mutation RemoveProductsFromChannel($input: RemoveProductsFromChannelInput!) {
        removeProductsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,dy=H.gql`
    mutation RemoveVariantsFromChannel($input: RemoveProductVariantsFromChannelInput!) {
        removeProductVariantsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,py=H.gql`
    query GetProductVariant($id: ID!) {
        productVariant(id: $id) {
            id
            name
            sku
            product {
                id
                featuredAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
            }
        }
    }
`,fy=H.gql`
    query GetCollectionFilters {
        collectionFilters {
            ...ConfigurableOperationDef
        }
    }
    ${Xf}
`,gy=H.gql`
    fragment Collection on Collection {
        id
        createdAt
        updatedAt
        name
        slug
        description
        isPrivate
        languageCode
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        filters {
            ...ConfigurableOperation
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        parent {
            id
            name
        }
        children {
            id
            name
        }
    }
    ${Hm}
    ${Qf}
`,my=H.gql`
    query GetCollectionList($options: CollectionListOptions) {
        collections(options: $options) {
            items {
                id
                name
                slug
                description
                isPrivate
                featuredAsset {
                    ...Asset
                }
                parent {
                    id
                }
            }
            totalItems
        }
    }
    ${Hm}
`,yy=H.gql`
    query GetCollection($id: ID!) {
        collection(id: $id) {
            ...Collection
        }
    }
    ${gy}
`,by=H.gql`
    mutation CreateCollection($input: CreateCollectionInput!) {
        createCollection(input: $input) {
            ...Collection
        }
    }
    ${gy}
`,vy=H.gql`
    mutation UpdateCollection($input: UpdateCollectionInput!) {
        updateCollection(input: $input) {
            ...Collection
        }
    }
    ${gy}
`,Cy=H.gql`
    mutation MoveCollection($input: MoveCollectionInput!) {
        moveCollection(input: $input) {
            ...Collection
        }
    }
    ${gy}
`,Sy=H.gql`
    mutation DeleteCollection($id: ID!) {
        deleteCollection(id: $id) {
            result
            message
        }
    }
`,wy=H.gql`
    query GetCollectionContents($id: ID!, $options: ProductVariantListOptions) {
        collection(id: $id) {
            id
            name
            productVariants(options: $options) {
                items {
                    id
                    productId
                    name
                }
                totalItems
            }
        }
    }
`;class _y{constructor(e){this.baseDataService=e}getCollectionFilters(){return this.baseDataService.query(fy)}getCollections(e=10,t=0){return this.baseDataService.query(my,{options:{take:e,skip:t}})}getCollection(e){return this.baseDataService.query(yy,{id:e})}createCollection(e){return this.baseDataService.mutate(by,{input:Object(Je.pick)(e,["translations","parentId","assetIds","featuredAssetId","filters","customFields"])})}updateCollection(e){return this.baseDataService.mutate(vy,{input:Object(Je.pick)(e,["id","isPrivate","translations","assetIds","featuredAssetId","filters","customFields"])})}moveCollection(e){return Object(Z.a)(e).pipe(Object(m.a)(e=>this.baseDataService.mutate(Cy,{input:e})),function(e,t=null){return function(n){return n.lift(new y(e,t))}}(e.length))}deleteCollection(e){return this.baseDataService.mutate(Sy,{id:e})}getCollectionContents(e,t=10,n=0,r){const i=r?{name:{contains:r}}:void 0;return this.baseDataService.query(wy,{id:e,options:{skip:n,take:t,filter:i}})}}const Ay=H.gql`
    fragment Address on Address {
        id
        createdAt
        updatedAt
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
            id
            code
            name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
    }
`,Oy=H.gql`
    fragment Customer on Customer {
        id
        createdAt
        updatedAt
        title
        firstName
        lastName
        phoneNumber
        emailAddress
        user {
            id
            identifier
            verified
            lastLogin
        }
        addresses {
            ...Address
        }
    }
    ${Ay}
`,xy=H.gql`
    query GetCustomerList($options: CustomerListOptions) {
        customers(options: $options) {
            items {
                id
                createdAt
                updatedAt
                title
                firstName
                lastName
                emailAddress
                user {
                    id
                    verified
                }
            }
            totalItems
        }
    }
`,My=H.gql`
    query GetCustomer($id: ID!, $orderListOptions: OrderListOptions) {
        customer(id: $id) {
            ...Customer
            groups {
                id
                name
            }
            orders(options: $orderListOptions) {
                items {
                    id
                    code
                    state
                    total
                    currencyCode
                    updatedAt
                }
                totalItems
            }
        }
    }
    ${Oy}
`,Vy=H.gql`
    mutation CreateCustomer($input: CreateCustomerInput!, $password: String) {
        createCustomer(input: $input, password: $password) {
            ...Customer
            ...ErrorResult
        }
    }
    ${Oy}
    ${Kf}
`,Ey=H.gql`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            ...Customer
            ...ErrorResult
        }
    }
    ${Oy}
    ${Kf}
`,Dy=H.gql`
    mutation DeleteCustomer($id: ID!) {
        deleteCustomer(id: $id) {
            result
            message
        }
    }
`,Ly=H.gql`
    mutation CreateCustomerAddress($customerId: ID!, $input: CreateAddressInput!) {
        createCustomerAddress(customerId: $customerId, input: $input) {
            ...Address
        }
    }
    ${Ay}
`,ky=H.gql`
    mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${Ay}
`,Iy=H.gql`
    mutation CreateCustomerGroup($input: CreateCustomerGroupInput!) {
        createCustomerGroup(input: $input) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Hy=H.gql`
    mutation UpdateCustomerGroup($input: UpdateCustomerGroupInput!) {
        updateCustomerGroup(input: $input) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Py=H.gql`
    mutation DeleteCustomerGroup($id: ID!) {
        deleteCustomerGroup(id: $id) {
            result
            message
        }
    }
`,Ty=H.gql`
    query GetCustomerGroups($options: CustomerGroupListOptions) {
        customerGroups(options: $options) {
            items {
                id
                createdAt
                updatedAt
                name
            }
            totalItems
        }
    }
`,Ry=H.gql`
    query GetCustomerGroupWithCustomers($id: ID!, $options: CustomerListOptions) {
        customerGroup(id: $id) {
            id
            createdAt
            updatedAt
            name
            customers(options: $options) {
                items {
                    id
                    createdAt
                    updatedAt
                    emailAddress
                    firstName
                    lastName
                }
                totalItems
            }
        }
    }
`,Zy=H.gql`
    mutation AddCustomersToGroup($groupId: ID!, $customerIds: [ID!]!) {
        addCustomersToGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Ny=H.gql`
    mutation RemoveCustomersFromGroup($groupId: ID!, $customerIds: [ID!]!) {
        removeCustomersFromGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Fy=H.gql`
    query GetCustomerHistory($id: ID!, $options: HistoryEntryListOptions) {
        customer(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,jy=H.gql`
    mutation AddNoteToCustomer($input: AddNoteToCustomerInput!) {
        addNoteToCustomer(input: $input) {
            id
        }
    }
`,By=H.gql`
    mutation UpdateCustomerNote($input: UpdateCustomerNoteInput!) {
        updateCustomerNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,zy=H.gql`
    mutation DeleteCustomerNote($id: ID!) {
        deleteCustomerNote(id: $id) {
            result
            message
        }
    }
`;class Uy{constructor(e){this.baseDataService=e}getCustomerList(e=10,t=0,n){const r=n?{filter:{emailAddress:{contains:n}}}:{};return this.baseDataService.query(xy,{options:Object.assign({take:e,skip:t},r)})}getCustomer(e,t){return this.baseDataService.query(My,{id:e,orderListOptions:t})}createCustomer(e,t){return this.baseDataService.mutate(Vy,{input:e,password:t})}updateCustomer(e){return this.baseDataService.mutate(Ey,{input:e})}deleteCustomer(e){return this.baseDataService.mutate(Dy,{id:e})}createCustomerAddress(e,t){return this.baseDataService.mutate(Ly,{customerId:e,input:t})}updateCustomerAddress(e){return this.baseDataService.mutate(ky,{input:e})}createCustomerGroup(e){return this.baseDataService.mutate(Iy,{input:e})}updateCustomerGroup(e){return this.baseDataService.mutate(Hy,{input:e})}deleteCustomerGroup(e){return this.baseDataService.mutate(Py,{id:e})}getCustomerGroupList(e){return this.baseDataService.query(Ty,{options:e})}getCustomerGroupWithCustomers(e,t){return this.baseDataService.query(Ry,{id:e,options:t})}addCustomersToGroup(e,t){return this.baseDataService.mutate(Zy,{groupId:e,customerIds:t})}removeCustomersFromGroup(e,t){return this.baseDataService.mutate(Ny,{groupId:e,customerIds:t})}getCustomerHistory(e,t){return this.baseDataService.query(Fy,{id:e,options:t})}addNoteToCustomer(e,t){return this.baseDataService.mutate(jy,{input:{note:t,isPublic:!1,id:e}})}updateCustomerNote(e){return this.baseDataService.mutate(By,{input:e})}deleteCustomerNote(e){return this.baseDataService.mutate(zy,{id:e})}}const $y=H.gql`
    fragment FacetValue on FacetValue {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            languageCode
            name
        }
        facet {
            id
            createdAt
            updatedAt
            name
        }
    }
`,qy=H.gql`
    fragment FacetWithValues on Facet {
        id
        createdAt
        updatedAt
        languageCode
        isPrivate
        code
        name
        translations {
            id
            languageCode
            name
        }
        values {
            ...FacetValue
        }
    }
    ${$y}
`,Gy=H.gql`
    mutation CreateFacet($input: CreateFacetInput!) {
        createFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${qy}
`,Wy=H.gql`
    mutation UpdateFacet($input: UpdateFacetInput!) {
        updateFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${qy}
`,Yy=H.gql`
    mutation DeleteFacet($id: ID!, $force: Boolean) {
        deleteFacet(id: $id, force: $force) {
            result
            message
        }
    }
`,Qy=H.gql`
    mutation CreateFacetValues($input: [CreateFacetValueInput!]!) {
        createFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${$y}
`,Xy=H.gql`
    mutation UpdateFacetValues($input: [UpdateFacetValueInput!]!) {
        updateFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${$y}
`,Ky=H.gql`
    mutation DeleteFacetValues($ids: [ID!]!, $force: Boolean) {
        deleteFacetValues(ids: $ids, force: $force) {
            result
            message
        }
    }
`,Jy=H.gql`
    query GetFacetList($options: FacetListOptions) {
        facets(options: $options) {
            items {
                ...FacetWithValues
            }
            totalItems
        }
    }
    ${qy}
`,eb=H.gql`
    query GetFacetWithValues($id: ID!) {
        facet(id: $id) {
            ...FacetWithValues
        }
    }
    ${qy}
`;class tb{constructor(e){this.baseDataService=e}getFacets(e=10,t=0){return this.baseDataService.query(Jy,{options:{take:e,skip:t}})}getAllFacets(e=!1){return this.baseDataService.query(Jy,{},e?"network-only":"cache-first")}getFacet(e){return this.baseDataService.query(eb,{id:e})}createFacet(e){const t={input:Object(Je.pick)(e,["code","isPrivate","translations","values","customFields"])};return this.baseDataService.mutate(Gy,t)}updateFacet(e){const t={input:Object(Je.pick)(e,["id","code","isPrivate","translations","customFields"])};return this.baseDataService.mutate(Wy,t)}deleteFacet(e,t){return this.baseDataService.mutate(Yy,{id:e,force:t})}createFacetValues(e){const t={input:e.map(Object(Je.pick)(["facetId","code","translations","customFields"]))};return this.baseDataService.mutate(Qy,t)}updateFacetValues(e){const t={input:e.map(Object(Je.pick)(["id","code","translations","customFields"]))};return this.baseDataService.mutate(Xy,t)}deleteFacetValues(e,t){return this.baseDataService.mutate(Ky,{ids:e,force:t})}}const nb=H.gql`
    fragment Adjustment on Adjustment {
        adjustmentSource
        amount
        description
        type
    }
`,rb=H.gql`
    fragment Refund on Refund {
        id
        state
        items
        shipping
        adjustment
        transactionId
        paymentId
    }
`,ib=H.gql`
    fragment OrderAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
    }
`,sb=H.gql`
    fragment Order on Order {
        id
        createdAt
        updatedAt
        orderPlacedAt
        code
        state
        nextStates
        total
        currencyCode
        customer {
            id
            firstName
            lastName
        }
        shippingLines {
            shippingMethod {
                name
            }
        }
    }
`,ab=H.gql`
    fragment Fulfillment on Fulfillment {
        id
        state
        nextStates
        createdAt
        updatedAt
        method
        orderItems {
            id
        }
        trackingCode
    }
`,ob=H.gql`
    fragment OrderLine on OrderLine {
        id
        featuredAsset {
            preview
        }
        productVariant {
            id
            name
            sku
            trackInventory
            stockOnHand
        }
        discounts {
            ...Adjustment
        }
        unitPrice
        unitPriceWithTax
        proratedUnitPrice
        proratedUnitPriceWithTax
        quantity
        items {
            id
            unitPrice
            unitPriceWithTax
            taxRate
            refundId
            cancelled
            fulfillment {
                ...Fulfillment
            }
        }
        linePrice
        lineTax
        linePriceWithTax
        discountedLinePrice
        discountedLinePriceWithTax
    }
`,cb=H.gql`
    fragment OrderDetail on Order {
        id
        createdAt
        updatedAt
        code
        state
        nextStates
        active
        customer {
            id
            firstName
            lastName
        }
        lines {
            ...OrderLine
        }
        surcharges {
            id
            sku
            description
            price
            priceWithTax
            taxRate
        }
        discounts {
            ...Adjustment
        }
        promotions {
            id
            couponCode
        }
        subTotal
        subTotalWithTax
        total
        totalWithTax
        currencyCode
        shipping
        shippingWithTax
        shippingLines {
            shippingMethod {
                id
                code
                name
                fulfillmentHandlerCode
                description
            }
        }
        taxSummary {
            description
            taxBase
            taxRate
            taxTotal
        }
        shippingAddress {
            ...OrderAddress
        }
        billingAddress {
            ...OrderAddress
        }
        payments {
            id
            createdAt
            transactionId
            amount
            method
            state
            metadata
            refunds {
                id
                createdAt
                state
                items
                adjustment
                total
                paymentId
                reason
                transactionId
                method
                metadata
                orderItems {
                    id
                }
            }
        }
        fulfillments {
            ...Fulfillment
        }
        modifications {
            id
            createdAt
            isSettled
            priceChange
            note
            payment {
                id
                amount
            }
            orderItems {
                id
            }
            refund {
                id
                paymentId
                total
            }
            surcharges {
                id
            }
        }
    }
    ${nb}
    ${ib}
    ${ab}
    ${ob}
`,lb=H.gql`
    query GetOrderList($options: OrderListOptions) {
        orders(options: $options) {
            items {
                ...Order
            }
            totalItems
        }
    }
    ${sb}
`,ub=H.gql`
    query GetOrder($id: ID!) {
        order(id: $id) {
            ...OrderDetail
        }
    }
    ${cb}
`,hb=H.gql`
    mutation SettlePayment($id: ID!) {
        settlePayment(id: $id) {
            ... on Payment {
                id
                transactionId
                amount
                method
                state
                metadata
            }
            ...ErrorResult
            ... on SettlePaymentError {
                paymentErrorMessage
            }
            ... on PaymentStateTransitionError {
                transitionError
            }
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${Kf}
`,db=H.gql`
    mutation CreateFulfillment($input: FulfillOrderInput!) {
        addFulfillmentToOrder(input: $input) {
            ...Fulfillment
            ...ErrorResult
        }
    }
    ${ab}
    ${Kf}
`,pb=H.gql`
    mutation CancelOrder($input: CancelOrderInput!) {
        cancelOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${cb}
    ${Kf}
`,fb=H.gql`
    mutation RefundOrder($input: RefundOrderInput!) {
        refundOrder(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${rb}
    ${Kf}
`,gb=H.gql`
    mutation SettleRefund($input: SettleRefundInput!) {
        settleRefund(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${rb}
    ${Kf}
`,mb=H.gql`
    query GetOrderHistory($id: ID!, $options: HistoryEntryListOptions) {
        order(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,yb=H.gql`
    mutation AddNoteToOrder($input: AddNoteToOrderInput!) {
        addNoteToOrder(input: $input) {
            id
        }
    }
`,bb=H.gql`
    mutation UpdateOrderNote($input: UpdateOrderNoteInput!) {
        updateOrderNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,vb=H.gql`
    mutation DeleteOrderNote($id: ID!) {
        deleteOrderNote(id: $id) {
            result
            message
        }
    }
`,Cb=H.gql`
    mutation TransitionOrderToState($id: ID!, $state: String!) {
        transitionOrderToState(id: $id, state: $state) {
            ...Order
            ...ErrorResult
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${sb}
    ${Kf}
`,Sb=H.gql`
    mutation UpdateOrderCustomFields($input: UpdateOrderInput!) {
        setOrderCustomFields(input: $input) {
            ...Order
        }
    }
    ${sb}
`,wb=H.gql`
    mutation TransitionFulfillmentToState($id: ID!, $state: String!) {
        transitionFulfillmentToState(id: $id, state: $state) {
            ...Fulfillment
            ...ErrorResult
            ... on FulfillmentStateTransitionError {
                transitionError
            }
        }
    }
    ${ab}
    ${Kf}
`,_b=H.gql`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orders(options: { filter: { orderPlacedAt: { between: { start: $start, end: $end } } } }) {
            totalItems
            items {
                id
                total
                currencyCode
            }
        }
    }
`,Ab=H.gql`
    mutation ModifyOrder($input: ModifyOrderInput!) {
        modifyOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${cb}
    ${Kf}
`,Ob=H.gql`
    mutation AddManualPayment($input: ManualPaymentInput!) {
        addManualPaymentToOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${cb}
    ${Kf}
    fragment Promotion on Promotion {
        id
        createdAt
        updatedAt
        name
        enabled
        couponCode
        perCustomerUsageLimit
        startsAt
        endsAt
        conditions {
            ...ConfigurableOperation
        }
        actions {
            ...ConfigurableOperation
        }
    }
    ${Qf}
`,Bb=H.gql`
    query GetPromotionList($options: PromotionListOptions) {
        promotions(options: $options) {
            items {
                ...Promotion
            }
            totalItems
        }
    }
    ${jb}
`,zb=H.gql`
    query GetPromotion($id: ID!) {
        promotion(id: $id) {
            ...Promotion
        }
    }
    ${jb}
`,Ub=H.gql`
    query GetAdjustmentOperations {
        promotionConditions {
            ...ConfigurableOperationDef
        }
        promotionActions {
            ...ConfigurableOperationDef
        }
    }
    ${Xf}
`,$b=H.gql`
    mutation CreatePromotion($input: CreatePromotionInput!) {
        createPromotion(input: $input) {
            ...Promotion
            ...ErrorResult
        }
    }
    ${jb}
    ${Kf}
`,qb=H.gql`
    mutation UpdatePromotion($input: UpdatePromotionInput!) {
        updatePromotion(input: $input) {
            ...Promotion
        }
    }
    ${jb}
`,Gb=H.gql`
    mutation DeletePromotion($id: ID!) {
        deletePromotion(id: $id) {
            result
            message
        }
    }
    fragment ShippingMethod on ShippingMethod {
        id
        createdAt
        updatedAt
        code
        name
        description
        fulfillmentHandlerCode
        checker {
            ...ConfigurableOperation
        }
        calculator {
            ...ConfigurableOperation
        }
        translations {
            id
            languageCode
            name
            description
        }
    }
    ${Qf}
`,Xb=H.gql`
    query GetShippingMethodList($options: ShippingMethodListOptions) {
        shippingMethods(options: $options) {
            items {
                ...ShippingMethod
            }
            totalItems
        }
    }
    ${Qb}
`,Kb=H.gql`
    query GetShippingMethod($id: ID!) {
        shippingMethod(id: $id) {
            ...ShippingMethod
        }
    }
    ${Qb}
`,Jb=H.gql`
    query GetShippingMethodOperations {
        shippingEligibilityCheckers {
            ...ConfigurableOperationDef
        }
        shippingCalculators {
            ...ConfigurableOperationDef
        }
        fulfillmentHandlers {
            ...ConfigurableOperationDef
        }
    }
    ${Xf}
`,ev=H.gql`
    mutation CreateShippingMethod($input: CreateShippingMethodInput!) {
        createShippingMethod(input: $input) {
            ...ShippingMethod
        }
    }
    ${Qb}
`,tv=H.gql`