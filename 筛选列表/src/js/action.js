var allPersonArr = [
        {name: '老邓', age: 60, sex: 'male', emali: 'dg@163.com'},
        {name: '邓嫂', age: 60, sex: 'female', emali: 'dg@163.com'},
        {name: '小小邓', age: 60, sex: 'male', emali: 'dg@163.com'},
        {name: '小宝宝', age: 60, sex: 'female', emali: 'dg@163.com'}
    ],
    oInp = document.getElementById('inpid'),
    oAge = document.getElementById('age'),
    oMale = document.getElementById('male'),
    oFemale = document.getElementById('female'),
    oAll = document.getElementById('all'),
    oUl = document.getElementById('ulid'),
    actions = [
        {doc: oInp, type: 'filterName'},
        {doc: oAge, type: 'addAge'},
        {doc: oMale, type: 'filterSex', prame: 'male'},
        {doc: oFemale, type: 'filterSex', prame: 'female'},
        {doc: oAll, type: 'filterSex', prame: 'all'}
    ],
    filterArr = [],
    lastArr = []