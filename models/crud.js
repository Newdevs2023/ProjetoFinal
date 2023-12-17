const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

const crud = {
    myData: [],
    read(filePath) {
        if (fs.existsSync(filePath)) {
            this.myData = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
            return crud.myData;

        }
    },
    create(obj, filePath) {
        this.myData.push(obj);
        fs.writeFileSync(filePath, JSON.stringify(crud.myData), { encoding: 'utf-8' });
    },
    verificaId() {
        if (this.myData.length > 0) {
            let idMaximo = crud.myData.at(-1).id;
            return ++idMaximo;
        }
        return 1;
    },
    update(obj, filePath) {
        let index = this.myData.findIndex(c => c.id == obj.id);
        if (index != -1) {
            crud.myData[index] = obj;
            fs.writeFileSync(filePath, JSON.stringify(crud.myData), { encoding: 'utf-8' });
        } else {
            console.log('Registro não localizado.')
        }
    },
    delete(id, filePath) {
        crud.read(filePath);
        let index = this.myData.findIndex(c => c.id == id);
        if (index != -1) {
            crud.myData.splice(index, 1);
            fs.writeFileSync(filePath, JSON.stringify(crud.myData), { encoding: 'utf-8' });
        } else {
            console.log('Registro não localizado.')
        }
    },
    selectItem(id, filePath) {
        crud.read(filePath);
        let el = this.myData.find((element) => element.id == id);
        return el;
    },  

    calcularValor(obj, filePath){
        this.myData.pull(obj);
        
        fs.writeFileSync(filePath, JSON.stringify(crud.myData), { encoding: 'utf-8' });
    },

}

module.exports = crud;