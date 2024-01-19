import { fakeHumanApiAdress } from "@/data/envVariables";
import axios from "axios";

export const getHumans = async(nationAbrebiation:string)=> {
    if(nationAbrebiation == "all"){
        const getData = await axios.get(`${fakeHumanApiAdress}`)
        .then(function (getData) {
        const humans = getData.data.humansList
        return(humans)
        })
        .catch(function (error) {
        console.log(error);
        return([])
        })
        .finally(function () {
        // always executed
        });
        return getData
    }else{
        const getData = await axios.get(`${fakeHumanApiAdress}humans/${nationAbrebiation}`)
        .then(function (getData) {
        const humans = getData.data.humansList
        return(humans)
        })
        .catch(function (error) {
        console.log(error);
        return([])
        })
        .finally(function () {
        // always executed
        });
        return getData
    }
}