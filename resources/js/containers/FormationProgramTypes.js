const token = document.getElementById('token').content;
export const get = async ()=>{
    try {
        let res = await fetch('/formation-program-types');
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const store = async (form) => {
    try {
        let fd = new FormData(form);
        fd.append('_token', token);
        let res = await fetch('/formation-program-types', {
            method:'POST',
            body:fd,
            headers:{
                'accept':'application/json'
            }
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const storeMass = async () => {
    try {
        let res = await fetch('/formation-program-types/mass', {
            method:'POST',
            headers:{
                'accept':'application/json',
                'X-CSRF-TOKEN': token
            }
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const destroy = async (id) => {
    try {
        let fd = new FormData();
        fd.append('_token', token);
        fd.append('_method', 'DELETE');
        let res = await fetch(`/formation-program-types/${id}`, {
            method:'POST',
            body:fd
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (form, id) => {
    try {
        let fd = new FormData(form);
        fd.append('_token', token);
        fd.append('_method', 'PUT');
        let res = await fetch(`/formation-program-types/${id}`, {
            method:'POST',
            body:fd
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const find = async (id) => {
    try {
        let res = await fetch(`/formation-program-types/${id}`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const rules = {
    name: {
        // Properties
        name: 'nombre',
        type: 'text',
        message: '',
        // Rules
        required: true,
        min: 5,
        isEmpty: true,
        isInvalid: true
    },
    elective_months:{
        name:'meses electivos',
        type:'numeric',
        message:'',
        required:true,
        isEmpty: true,
        isInvalid:true
    },
    practice_months:{
        name:'meses practicos',
        type:'numeric',
        message:'',
        required:true,
        isEmpty: true,
        isInvalid:true
    }
};