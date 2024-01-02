import axios from "axios";
import { observable, action, makeObservable, runInAction, toJS } from 'mobx';

class business{
    data = {


    };
    baseURL = "http://localhost:8787";
    constructor() {
        makeObservable(this, {
            data: observable,
            changeDetails: action,
           
        })
        this.initData();
    }

    initData() {
        this.getData();
        
        if (!this.data.name) {
        
            this.changeDetails({
                name: "דורית - עיצוב פנים ואדריכלות",
                address: "רחוב כנרת 15, בני ברק (מול קניון איילון)",
                phone: "03-5702144",
                owner: "דורית xkg ",
                logo: "https://www.doritsela.co.il/wp-content/uploads/2021/10/850_7474AAA-copy.jpg",
                description: ` משרד אדריכלים ועיצוב פנים דורית סלע – מובילים לאיכות עיצובית אחרת.
            `

            });

        }
       
    }

    getData() {
        axios.get(`http://localhost:8787/businessData`).then(res => {
            runInAction(() => {
                this.data = res.data;
            })
            console.log("details after change", toJS(this.data));
        })
    }

    changeDetails(businessData) {
        console.log("i change details!");
        axios.post(`http://localhost:8787/businessData`, businessData)
            .then(
                runInAction(
                    () => this.data = businessData)
            )
    }
}
export default new business();