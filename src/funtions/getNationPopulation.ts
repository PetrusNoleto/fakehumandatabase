import { fakeHumanApiAdress } from "@/data/envVariables";
import axios from "axios";

export const getNationPopulation = async(nationAbrebiation:string)=> {
    if(nationAbrebiation == "all"){
        const getData = await axios.get(`${fakeHumanApiAdress}`)
        .then(function (getData) {
        const populationQnt = getData.data.qnt as number
        return(Number(populationQnt))
        })
        .catch(function (error) {
        console.log(error);
        return(0)
        })
        .finally(function () {
        // always executed
        });
        return getData
    }else{
        const getData = await axios.get(`${fakeHumanApiAdress}country/${nationAbrebiation}`)
        .then(function (getData) {
        const populationQnt = getData.data.qnt
        return(Number(populationQnt))
        })
        .catch(function (error) {
        console.log(error);
        return(0)
        })
        .finally(function () {
        // always executed
        });
        return getData
    }
}