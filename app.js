
window.onload = function(){
    console.log("app started");
    app.init();
};

app={
    data: new Date(),

    DOMhours: undefined,
    DOMminutes: undefined,
    DOMseconds: undefined,

    hours: null,
    minutes: null,
    seconds: null,

    init: function(){
        this.DOMhours = document.getElementById("hours");
        this.DOMminutes = document.getElementById("minutes");
        this.DOMseconds = document.getElementById("seconds");

        this.getTime();
    },

    getTime: function(){
        this.hours = this.data.getHours();
        this.minutes = this.data.getMinutes();
        this.seconds = this.data.getSeconds();

        this.updateTime();
    },

    updateTime: function(){
        app.seconds++;

        if(app.seconds === 60){
            app.seconds = 0;
            app.minutes++;
            if(app.minutes === 60){
                app.minutes = 0;
                apps.hours++;
                if(apps.hours === 24){
                    app.hours = 0;
                }
            }
        }

        app.printTime();
    },

    printTime: function(){
        if(this.hours >= 10){
            this.DOMhours.innerHTML = this.hours;
        }
        else{
            this.DOMhours.innerHTML = "0"+this.hours;
        }
        if(this.minutes >= 10){
            this.DOMminutes.innerHTML = this.minutes;
        }
        else{
            this.DOMminutes.innerHTML = "0"+this.minutes;
        }
        if(this.seconds >= 10){
            this.DOMseconds.innerHTML = this.seconds;
        }
        else{
            this.DOMseconds.innerHTML = "0"+this.seconds;
        }

        setTimeout(app.updateTime, 1000);
    }
}