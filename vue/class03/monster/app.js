new Vue({
    el: '#app',
    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRuning: false,
        logs:[]
    },
    methods: {
        startGame(){
            this.gameIsRuning=true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.logs = []
        },
        attack(){
        
            // damydy = Math.max(Math.floor((Math.random()*max+1)),min)
            var damage = this.calDamage(10,3)
            this.monsterHealth -= damage
            this.monsterAttacks()
            this.logs.unshift({
                isPlayer: true,
                damage: 'player hist monster for' + damage
            })
            // if(this.monsterHealth < 0){
            //     alert('You win!')
            //     this.gameIsRuning = false
            //     return
            // }
            // this.playerHealth -= this.calDamage(15,5)
            if(this.checWin()){
                return 
            }
            
            // damydy = Math.max(Math.floor((Math.random()*max+1)),min)
            // if (this.playerHealth <= 0) {
            //     alert('You Lost')
            //     this.gameIsRuning = false
            // }
        },
        specialAttack(){
            var damage = this.calDamage(20,10)
            this.monsterHealth -= damage
            this.logs.unshift({
                isPlayer: true,
                damage: 'player hist hard monster for' + damage
            })
            if(this.checWin()){
                return
            }
            this.monsterAttacks()
            
        },
        heal(){
            if(this.playerHealth <= 90 ){

                this.playerHealth +=10
            }else{
                this.playerHealth = 100
            }
            this.logs.unshift({
                isPlayer: true,
                damage: 'player heal for ten'
            }) 
            this.monsterAttacks()
            
        },
        giveUp(){
            this.gameIsRuning = false
        },
        calDamage(max,min){
            return Math.max(Math.floor(Math.random()*max)+1,min)
        },
        monsterAttacks(){
            var damage = this.calDamage(15,5)
            this.playerHealth -= damage
            this.checWin()
            this.logs.unshift({
                isPlayer: false,
                damage: 'monster hist player for' + damage
            })
        },
        checWin(){
            if(this.monsterHealth <= 0){
                if(confirm('You Win! New Game')){
                    this.startGame()
                }else{
                    this.gameIsRuning = false
                }
                return true
            }else if(this.playerHealth <= 0){
                if(confirm('You Lost! New Game')){
                    this.startGame()
                }else{
                    this.gameIsRuning = false
                }
                return true
            }
            return false
        }
    }
})