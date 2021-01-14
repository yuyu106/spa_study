var myId = 999
var myIcon = 'green'

var userData = [
    {
        id: myId,
        name: '自分',
        description: 'わー',
        icon: myIcon
    },
   {
       id: 1,
       name: 'ほわん',
       description: '北国の小さな村で生まれ育った、白っぽいきつね族の女の子。',
       icon: 'rabbit'
   },
   {
       id: 2,
       name: 'ヒメコ',
       description: '縞々猫族の女の子。しましまのツインテールがチャームポイント。',
       icon: 'cat'
   },
   {
    id: 3,
    name: 'ヒメコ',
    description: '縞々猫族の女の子。しましまのツインテールがチャームポイント。',
    icon: 'tropical'
}
]

var messages = [
    {
        id:1,
        userId: 1,
        message: 'Hello'
    },
    {
        id: 2,
        userId: myId,
        message: 'こんにちは'
    },
    {
        id: 3,
        userId: 3,
        message: 'Bonjour'
    },
    {
        id: 4,
        userId: 2,
        message: '你早\nHola!'
    },
/*     {
        id:5,
        userId: 1,
        message: `こんな夢を見た。
        　腕組をして枕元に坐っていると、仰向に寝た女が、静かな声でもう死にますと云う。女は長い髪を枕に敷いて、輪郭の柔らかな瓜実顔をその中に横たえている。真白な頬の底に温かい血の色がほどよく差して、唇の色は無論赤い。とうてい死にそうには見えない。しかし女は静かな声で、もう死にますと判然云った。自分も確にこれは死ぬなと思った。そこで、そうかね、もう死ぬのかね、と上から覗き込むようにして聞いて見た。死にますとも、と云いながら、女はぱっちりと眼を開あけた。大きな潤のある眼で、長い睫に包まれた中は、ただ一面に真黒であった。その真黒な眸の奥に、自分の姿が鮮に浮かんでいる。
        　自分は透き徹るほど深く見えるこの黒眼の色沢を眺めて、これでも死ぬのかと思った。それで、ねんごろに枕の傍へ口を付けて、死ぬんじゃなかろうね、大丈夫だろうね、とまた聞き返した。すると女は黒い眼を眠そうにみはったまま、やっぱり静かな声で、でも、死ぬんですもの、仕方がないわと云った。
        　じゃ、私の顔が見えるかいと一心に聞くと、見えるかいって、そら、そこに、写ってるじゃありませんかと、にこりと笑って見せた。自分は黙って、顔を枕から離した。腕組をしながら、どうしても死ぬのかなと思った。
        　しばらくして、女がまたこう云った。
        「死んだら、埋めて下さい。大きな真珠貝で穴を掘って。そうして天から落ちて来る星の破片を墓標に置いて下さい。そうして墓の傍に待っていて下さい。また逢いに来ますから」
        　自分は、いつ逢いに来るかねと聞いた。
        「日が出るでしょう。それから日が沈むでしょう。それからまた出るでしょう、そうしてまた沈むでしょう。――赤い日が東から西へ、東から西へと落ちて行くうちに、――あなた、待っていられますか」
        　自分は黙って首肯いた。女は静かな調子を一段張り上げて、
        「百年待っていて下さい」と思い切った声で云った。
        「百年、私の墓の傍に坐って待っていて下さい。きっと逢いに来ますから」
        　自分はただ待っていると答えた。すると、黒い眸のなかに鮮に見えた自分の姿が、ぼうっと崩れて来た。静かな水が動いて写る影を乱したように、流れ出したと思ったら、女の眼がぱちりと閉じた。長い睫の間から涙が頬へ垂れた。――もう死んでいた。
        　自分はそれから庭へ下りて、真珠貝で穴を掘った。真珠貝は大きな滑かな縁ふちの鋭どい貝であった。土をすくうたびに、貝の裏に月の光が差してきらきらした。湿った土の匂もした。穴はしばらくして掘れた。女をその中に入れた。そうして柔らかい土を、上からそっと掛けた。掛けるたびに真珠貝の裏に月の光が差した。
        　それから星の破片の落ちたのを拾って来て、かろく土の上へ乗せた。星の破片は丸かった。長い間大空を落ちている間に、角が取れて滑かになったんだろうと思った。抱き上げて土の上へ置くうちに、自分の胸と手が少し暖くなった。
        　自分は苔の上に坐った。これから百年の間こうして待っているんだなと考えながら、腕組をして、丸い墓石を眺めていた。そのうちに、女の云った通り日が東から出た。大きな赤い日であった。それがまた女の云った通り、やがて西へ落ちた。赤いまんまでのっと落ちて行った。一つと自分は勘定した。
        　しばらくするとまた唐紅の天道がのそりと上って来た。そうして黙って沈んでしまった。二つとまた勘定した。
        　自分はこう云う風に一つ二つと勘定して行くうちに、赤い日をいくつ見たか分らない。勘定しても、勘定しても、しつくせないほど赤い日が頭の上を通り越して行った。それでも百年がまだ来ない。しまいには、苔の生えた丸い石を眺めて、自分は女に欺されたのではなかろうかと思い出した。
        　すると石の下から斜に自分の方へ向いて青い茎が伸びて来た。見る間に長くなってちょうど自分の胸のあたりまで来て留まった。と思うと、すらりと揺ぐ茎の頂に、心持首を傾けていた細長い一輪の蕾が、ふっくらと弁を開いた。真白な百合が鼻の先で骨に徹えるほど匂った。そこへ遥の上から、ぽたりと露が落ちたので、花は自分の重みでふらふらと動いた。自分は首を前へ出して冷たい露の滴る、白い花弁に接吻した。自分が百合から顔を離す拍子に思わず、遠い空を見たら、暁の星がたった一つ瞬いていた。
        「百年はもう来ていたんだな」とこの時始めて気がついた。`
    }, */
    {
        id:5,
        userId: myId,
        message: "Hello Hello New Era!"
    },
]

//擬似的にWebAPI経由で情報を取得したようにする
var getMessages = function(callback) {
    setTimeout(function() {
        callback(null, messages)
    }, 1000)
}
var getUser = function(userId, callback) {
    setTimeout(function() {
        var filteredUsers = userData.filter(function (user) {
            return user.id === parseInt(userId, 10)
        })
        callback(null, filteredUsers && filteredUsers[0])
    }, 1000)
}
var getUsers = function(callback) {
    setTimeout(function() {
        callback(null, userData)
    }, 1000)
}
//擬似的にAPI経由で情報を更新したようにする
var postMsg = function(params, callback) {
    setTimeout(function() {
        params.id = messages.length + 1
        params.userId = myId
        params.icon = myIcon
        messages.push(params)
        callback(null, params)
    }, 10)
}
var postUser = function(params, callback) {
    setTimeout(function() {
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
    }, 1000)
}

var Messages = {
    template: '#top',
    data: function() {
        return {
            loading: false,
            sending: false,
            messages: function(){return []}, //初期値の空配列
            message: this.defaultMessage(),
            error: null,
            isFirst: false,
            composing: false
        }
    },
    //初期化時にデータを取得
    created: function() {
        this.fetchData()
        this.isFirst = true
    },
    updated: function(){
        if(!this.isFirst) {
            var element = document.documentElement
            var bottom = element.scrollHeight - element.clientHeight
            window.scroll(0, bottom)
        }  
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getMessages((function(err, messages) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.messages = messages;
                }
            }).bind(this))
        },
        defaultMessage: function() {
            return {
                id: '',
                userId: '',
                message: ''
            }
        },
        createMessage: function(){
            this.isFirst = false
            var textarea = document.getElementById('textarea');
            var messages = document.getElementById('messages');
            textarea.style.height = '24px'
            messages.style.paddingBottom = '88px'
            if(this.message.message.trim() === ''){
                return
            }
            postMsg(this.message, (function(err, message) {
                this.sending = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    this.message = this.defaultMessage()
                    //ユーザー一覧に戻る
                    this.$router.push('/top')  
                }
            }).bind(this))
        },

        iconColor: function(userId) {
            var user = userData.filter(user => user.id === userId)
            return user[0].icon
        },

        keyEnter: function(event) {
            if (event.keyCode !== 13) return
            var ut = navigator.userAgent;
            if(ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0) {
                if(this.composing) {
                    return
                }
                else {
                    this.setTextareaHeight()
                    return
                }
            }
            this.createMessage()
        },
        keyEnterShift: function(event) {
            var ut = navigator.userAgent;
            if(ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0) return
            this.setTextareaHeight()
        },
        setTextareaHeight: function(event) {     
            var textarea = document.getElementById('textarea');
            var messages = document.getElementById('messages');
            var height = parseInt(window.getComputedStyle(textarea).height);
            var margin = parseInt(window.getComputedStyle(messages).paddingBottom);
            height += 24
            margin += 24
            textarea.style.height = height + 'px'
            messages.style.paddingBottom = margin + 'px'
        },

        // トランジション開始でインデックス*100ms分のディレイを付与
        beforeEnter(el) {
            if (!this.isFirst) {el.dataset.index = 0}
            el.style.transitionDelay = 100 * parseInt(el.dataset.index, 10) + 'ms'
        },
        // トランジション完了またはキャンセルでディレイを削除
        afterEnter(el) {
            el.style.transitionDelay = ''
        }
    },
    computed: {
        checkMyMessage: function() {
            return function(userId) {
                if(userId === myId) return "myMessage"
                return
            }    
        }
    }
}

var UserList = {
    template: '#user-list',
    data: function() {
        return {
            loading: false,
            users: function(){return []}, //初期値の空配列
            error: null
        }
    },
    //初期化時にデータを取得
    created: function() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getUsers((function(err, users) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.users = users;
                }
            }).bind(this))
        }
    }

    /*
    data: function() {
        return {
            users: function() {return []},
            error: null
        }
    },
    beforeRouteEnter: function(To, from, next) {
        getUsers((function (err, users){
            if(err) {
                this.error = err.toString()
            } else {
                next(function (vm) {
                    vm.users = users
                })
            }
        }).bind(this))
    }
    */
}

var UserDetail = {
    template: '#user-detail',
    data: function() {
        return {
            loading: false,
            user: null,
            error: null
        }
    },
    created: function() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getUser(this.$route.params.userId, (function(err, user) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.user = user;
                }
            }).bind(this))
        }
    }
}

var UserCreate = {
    template: '#user-create',
    data: function() {
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },
    created: function() {
    },
    methods: {
        defaultUser: function() {
            return {
                name: '',
                description: ''
            }
        },
        createUser: function(){
            if(this.user.name.trim() === ''){
                this.error = "Nameは必須です"
                return
            }
            if(this.user.description.trim() === ''){
                this.error = "Descriptionは必須です"
                return
            }
            postUser(this.user, (function(err, user) {
                this.sending = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    this.user = this.defaultUser()
                    alert('新規ユーザーが登録されました')
                    //ユーザー一覧に戻る
                    this.$router.push('/users')
                }
            }).bind(this))
        }
    }
}


var router = new VueRouter({
    //ルート定義を配列で渡す
    routes: [
        {
            path: '/top',   //URLの指定。ファイル名#/topでアクセスできる。
            component: Messages
        },
        {
            path: '/users',   //URLの指定。ファイル名#/usersでアクセスできる。
            component: UserList,
            /*
            beforeEnter: function (to, from, next) {
                //users?redirect=trueでアクセスした時だけリダイレクト
                if(to.query.redirect === 'true') {
                    next('/top')
                } else {
                    next ()
                }
            }
            */
        },
        {
            path: '/users/new',
            component: UserCreate
        },
        {
            path: '/user/:userId',  
            name: 'user', 
            component: UserDetail
        }
    ] 
})

/*  usersにアクセスしたらリダイレクトする
router.beforeEach(function (to, from, next) {
    if(to.path === '/users') {
        next('/top')
    } else {
        next()
    }
})
*/

var app = new Vue({
    el: '#app',
    router: router
})


