var app=Vue.createApp({
    data(){
        return{
            title:'Contador App :: Vue',
            count:0,
        };
    },
    methods: {
        ModCount(instruccion='add',limit=1)
        {
            if(instruccion==='add') this.count+=limit;
            else this.count-=limit;
        },
        MenosCount()
        {
            let _this=this;
            _this.count--;
        },
        MasCount(){
            this.count++;
        }   
 },
});