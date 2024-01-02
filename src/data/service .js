// import { observable, action, makeObservable, runInAction } from "mobx";
// import axios from "axios";
// class service {
//     servicesList = [];
//     temp = [
//         {
//             id: "1",
//             name: "Personal training:",
//             description:
//                 "Personal training service provides a personal and customized training and fitness experience. A personal trainer can develop a personalized training plan, teach proper exercise techniques, and provide unique and customized support for each client.",
//             price: 450,
//             duration: 45,
//             img: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
//         }
//         ,
//         {
//             id: "2",
//             name: "Writing nutrition plans:",
//             description:
//                 "This service includes personal nutritional counseling and writing nutrition plans adapted to the personal needs of each client. The diet is designed to support fitness goals, improve exercise efficiency, and provide ongoing nutritional advice.",
//             price: 300,
//             duration: 20,
//             img: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
//         }
//     ];
//     constructor() {
//         makeObservable(this, {
//             servicesList: observable,
//             getServicesList: action,
//             postService: action,
//             addService: action,
//             initServices: action
//         });
//         this.getServicesList();
//     }
//     getData() {
//         axios.get(`http://localhost:8787/services`).then(res => {

//             console.log("res from the server", toJS(res.data));
//             runInAction(() => {
//                 this.data = res.data;
//             })
//             console.log("data after fetch", toJS(this.data));
//             if (toJS(this.data.length == 0)) {
//                 this.addService({
//                     id: '1',
//                     name: 'פגישת ניהול',
//                     description: 'פגישת ניהול עם צוות הנדל"ן',
//                     price: 700,
//                     duration: 90
//                 });
//                 this.addService({
//                     id: '2',
//                     name: 'פגישת שיווק',
//                     description: 'פגישה עם צוות השיווק לתכנון קמפיינים נדל"ן',
//                     price: 800,
//                     duration: 120
//                 });
//             }
//         })
//     }
//     getServicesList() {
//         axios.get('http://localhost:8787/services')
//             .then((res) => {
//                 runInAction(() => {
//                     this.servicesList = res.data;
//                     this.temp.map(x => this.postService(x));
//                 })
//             })
//     }
//     addService = async (id, name, description, price, duration, img) => {
//         const response = await fetch("http://localhost:8787/service", {// כתיבה עם fetch
//             method: "POST",
//             body: JSON.stringify({ id, name, description, price, duration, img }),
//         });
//         return response.status
//     }
//     initServices =
//         async () => {
//             const response = await fetch("http://localhost:8787/services");
//             const data = await response.json();
//             this.services = ([...data])
//         }
//     postService = async (id, name, description, price, duration, img) => {
//         const response = await fetch("http://localhost:8787/service", {// כתיבה עם fetch
//             method: "POST",
//             body: JSON.stringify({ id, name, description, price, duration, img }),
//         });
//         return response.status
//     }


// }
// export default new service();
import axios from "axios";
import { observable, action, makeObservable, runInAction, toJS } from 'mobx';

class service {
    data = [];
    baseURL = "http://localhost:8787";
    constructor() {
        makeObservable(this, {
            data: observable,
            addService: action,
        })
        this.getData();
    }

   
    getData() {
        axios.get(`http://localhost:8787/services`).then(res => {

            console.log("res from the server", toJS(res.data));
            runInAction(() => {
                this.data = res.data;
            })
            console.log("data after fetch", toJS(this.data));
            if (toJS(this.data.length == 0)) {
                this.addService({
                    id: '1',
                    name: 'פגישת ניהול',
                    description: 'פגישת ניהול עם צוות הנדל"ן',
                    price: 700,
                    duration: 90
                });
                this.addService({
                    id: '2',
                    name: 'פגישת שיווק',
                    description: 'פגישה עם צוות השיווק לתכנון קמפיינים נדל"ן',
                    price: 800,
                    duration: 120
                });
            }
        })
    }

    addServices(service) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8787/service", service)
                .then((res) => {
                    if (res.status === 200) {
                        runInAction(() => {
                            this.data.push(service);
                        });
                    } else {
                        console.error("Meeting was not added. Unexpected status:", res.status);
                    }
                    resolve(res.status); // Resolve with the status code
                })
                .catch((error) => {
                    console.error("Error adding meeting:", error);
                    reject(error); // Reject with the error for further handling
                });
        });
    }




























    setService(val) {
        this.services = val
      }
      addService = async (id, name, description, price, duration) => {
        const response = await fetch("http://localhost:8787/service", {// כתיבה עם fetch
          method: "POST",
          body: JSON.stringify({ id, name, description, price, duration }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.status
      }
}
export default new service();