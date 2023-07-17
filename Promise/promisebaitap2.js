var leaves = [
    {
        id: 1,
        depart_id: 1,
        typeLeave: "Phép Năm",
    },
    {
        id: 2,
        depart_id: 2,
        typeLeave: "Phép Thường",
    },
    {
        id: 3,
        depart_id: 3,
        typeLeave: "Phép Thai sản",
    },
    {
        id: 4,
        depart_id: 4,
        typeLeave: "Phép Tang chế",
    },
    {
        id: 5,
        depart_id: 5,
        typeLeave: "Kết Hôn",
    },
];

var departments = [
    {
        id: 1,
        typeDepartment: "TCHC",
    },
    {
        id: 2,
        typeDepartment: "Kinh Doanh",
    },
    {
        id: 3,
        typeDepartment: "QA",
    },
];

function getLeaves() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(leaves);
        }, 1000);
    });
}

function getDepartByIDs(departIds) {
    return new Promise(function (resolve) {
        var result = departments.filter(function (depart) {
            return departIds.includes(depart.id);
        });
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

getLeaves()
    .then(function (leaves) {
        var departIds = leaves.map(function (leave) {
            return leave.depart_id;
        });
        return getDepartByIDs(departIds).then(function (departs) {
            return {
                departs: departs,
                leaves: leaves,
            };
        });
    })
    .then(function (data) {
        var commentBoxElement = document.getElementById("comment-box");
        var html = "";
        data.leaves.forEach(function (leave) {
            var depart = data.departs.filter(function (depart) {
                return depart.id === leave.depart_id;
            });
            html += `<li>${depart.typeDepartment}: ${leave.typeLeave}</li>`;
        });
        commentBoxElement.innerHTML = html;
    });
