const role = 
{
    "_id"           : "int",
    "roleName"      : "string" 
}

const account = 
{
    "_id"       : "int",
    "username"  : "string",
    "password"  : "string",
    "name"      : "string",
    "address"   : "string",
    "email"     : "string",
    "phone"     : "string",  
    "role"      : "int"
}

const sach = 
{
    "_id"           : "int" ,
    "type"          : "string" ,
    "bookName"      : "string",
    "description"   : "string",
    "author"        : "string",
    "nxb"           : "string",
    "PrdImage"      : "image"
}

const hoadon = 
{
    "_id"        : "int",
    "createDate"        : "date",
    "deliveryDate"      : "date",
    "status"            : "int",
    "UID"               : "int",
    "SID"               : "int"
}

const chitiet = 
{
    "_id"           : "int",
    "billNumber"    : "int",
    "prdId"         : ["SP1" , "Sp2"],
    "quantity"      : [  1   ,   3  ],
}

const giohang = 
{
    "_id"       : "int" ,
    "UID"       : "int" ,
    "prdId"     :["SP1" , "Sp2" ] ,
    "quantity"  :[  1   ,   3   ] ,
}

const roleInput = 
[
    {
        "_id": 1,
        "roleName": "Khach Hang"
    },
    {
        "_id": 2,
        "roleName": "Nhan Vien"
    },
    {
        "_id": 3,
        "roleName": "Admin"
    }
]
const accountInput = 
[
    {
        "_id": 1,
        "username": "admin",
        "password": "123",
        "name": "Người Quản Lý",
        "address": "CT",
        "email": "admin@gmail.com",
        "phone": "1000",  
        "role": 3
    },
    {
        "_id": 2,
        "username": "staff",
        "password": "123",
        "name": "Nhân Viên",
        "address": "CT",
        "email": "staff@gmail.com",
        "phone": "1000",  
        "role": 2
    },
    {
        "_id": 3,
        "username": "user",
        "password": "123",
        "name": "Khách Hàng",
        "address": "HN",
        "email": "cus@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 4,
        "username": "lsatan",
        "password": "123",
        "name": "Lê Sỹ Anh Tấn",
        "address": "CT",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 5,
        "username": "lpthinh",
        "password": "123",
        "name": "Lê Phu THinh",
        "address": "VT",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 6,
        "username": "php",
        "password": "123",
        "name": "Phạm Hoàng Phong",
        "address": "ST",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 7,
        "username": "staff2",
        "password": "123",
        "name": "Nhân Viên 2",
        "address": "CM",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 2
    }
]
const sanphamInput = 
[
    {
        "_id"           : 1 ,
        "productName"   : "Nhà Giả Kim",
        "type"          : "Tiểu thuyết",   
        "author"        : "Paulo Coelho",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg"
    },
   {
    "_id"           : 2 ,
        "productName"   : "Harry Potter & W.Stone",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/5/51/Harry_Potter_v%C3%A0_H%C3%B2n_%C4%91%C3%A1_ph%C3%B9_th%E1%BB%A7y_b%C3%ACa_2003.jpeg"
   },
   {
    "_id"           : 3 ,
        "productName"   : "Cô Bé Quàng Khăn Đỏ",
        "type"          : "Truyện cổ tích",   
        "author"        : "Charles Perrault",
        "nxb"           : "NXB: Văn Học",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Little_Red_Riding_Hood_-_J._W._Smith.jpg/800px-Little_Red_Riding_Hood_-_J._W._Smith.jpg"
   },
   {
    "_id"           : 4 ,
        "productName"   : "Harry Potter & C.Secret",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/6/62/Harry_Potter_v%C3%A0_Ph%C3%B2ng_ch%E1%BB%A9a_b%C3%AD_m%E1%BA%ADt.jpg"
   },
   {
    "_id"           : 5 ,
        "productName"   : "The Old Man and the Sea",
        "type"          : "Tiểu thuyết",   
        "author"        : "Ernest Hemingway",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/thumb/7/73/Oldmansea.jpg/300px-Oldmansea.jpg"
   },
   {
    "_id"           : 6 ,
        "productName"   : "Quê Người",
        "type"          : "Truyện Dài",   
        "author"        : "Tô Hoài",
        "nxb"           : "NXB: Văn Học",
        "PrdImage"      : "https://www.khaitam.com/Data/Sites/1/Product/543/que-nguoi.jpg"
   },
   {
    "_id"           : 7 ,
        "productName"   : "Why We Sleep",
        "type"          : "Khoa Học",   
        "author"        : "Matthew Walker",
        "nxb"           : "NXB: Tuổi Trẻ",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/en/9/94/Why_We_Sleep_book_cover.png"
   },
   {
    "_id"           : 8 ,
        "productName"   : "Harry Potter & Hoàng tử lai",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a5/HBP.JPG/300px-HBP.JPG"
   },
   {
    "_id"           : 9 ,
        "productName"   : "Hoàng tử bé ",
        "type"          : "Tiểu thuyết",   
        "author"        : "Antoine de Saint-Exupéry",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/0/05/Littleprince.JPG"
   },
   {
    "_id"           : 10 ,
        "productName"   : "Anh chàng Hobbit",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. R. R. Tolkien",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/0/0f/Anh_ch%C3%A0ng_Hobbit_%28s%C3%A1ch%29.jpg"
   },
   {
    "_id"           : 11 ,
        "productName"   : "Alice ở xứ sở thần tiên",
        "type"          : "Tiểu thuyết",   
        "author"        : "Charles Lutwidge Dodgson",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/commons/a/af/AlicesAdventuresInWonderlandTitlePage.jpg"
   },
   {
    "_id"           : 12 ,
        "productName"   : "Think and Grow Rich",
        "type"          : "Tiểu thuyết",   
        "author"        : " Napoleon Hill ",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://m.media-amazon.com/images/I/51EhG-kKCAL._SY445_SX342_.jpg"
   },
   {
    "_id"           : 13 ,
        "productName"   : "Harry Potter và Bảo bối Tử thần",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/4/4d/HARRY-7.jpg"
   },
   {
    "_id"           : 14 ,
        "productName"   : "Harry Potter và Chiếc cốc lửa",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/8/88/Harry_Potter_v%C3%A0_Chi%E1%BA%BFc_c%E1%BB%91c_l%E1%BB%ADa_b%C3%ACa.jpg"
   },
   {
    "_id"           : 15 ,
        "productName"   : "Harry Potter: A History of Magic",
        "type"          : "Tiểu thuyết",   
        "author"        : "J. K. Rowling",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://nhasachphuongnam.com/images/thumbnails/435/537/detailed/153/harry-10.jpg"
   },
   {
    "_id"           : 16 ,
        "productName"   : "Đắc nhân tâm",
        "type"          : "Self-Help",   
        "author"        : "Dale Carnegie",
        "nxb"           : "NXB: Kim Đồng",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/0/0a/%C4%90%E1%BA%AFc_nh%C3%A2n_t%C3%A2m.jpg"
   },
   {
    "_id"           : 17 ,
        "productName"   : "Kỹ thuật lập trình C",
        "type"          : "Giáo Trình",   
        "author"        : "Phạm Văn Ất",
        "nxb"           : "NXB: BKHN",
        "PrdImage"      : "https://product.hstatic.net/200000017360/product/bia_ky_thuat_lap_trinh_c_14-03_fix__1_-b1_950fc2f571cd481abf07d57bf4a12b33_master.jpg"
   },
   {
    "_id"           : 18 ,
        "productName"   : "Dune",
        "type"          : "Tiểu thuyết",   
        "author"        : "Frank Herbert ",
        "nxb"           : "NXB: Thanh",
        "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/8/82/Chapterhouse_Dune-Frank_Herbert_%281985%29_First_edition.jpg?20240315105740"
   },
   
  


]
const TypeProductInput = 
[
    {
        "_id" : 1 ,
        "Name" : "Tiểu Thuyết" 
    },
    {
        "_id" : 2 ,
        "Name" : "Lãng Mạn" 
    },
    {
        "_id" : 3 ,
        "Name" : "Truyện Ngắn" 
    },
    {
        "_id" : 4 ,
        "Name" : "Truyện Cổ Tích" 
    },
    {
        "_id" : 5 ,
        "Name" : "Truyện Dài" 
    },
    {
        "_id" : 6 ,
        "Name" : "Khoa Học" 
    },

]
const hoadonInput = 
[
    {
        "_id"               : 1 ,
        "createDate"        : "2024-04-02",
        "status"            : 2,
        "UID"               : 3,
        "SID"               : -1 ,
    },
    {
        "_id"               : 2 ,
        "createDate"        : "2024-04-01" ,
        "status"            : 2,
        "UID"               : 3,
        "SID"               : -1 ,

    }
]
//  Các Trạng Thái Ứng với Các Số 
//  Đã Huỷ          -> 0
//  Đã Đặt Hàng     -> 1
//  Đã Xác Nhận     -> 2
//  Đang Giao Hàng  -> 3
//  Đã Thanh Toán   -> 4
const chitietInput = 
[
    {
        "_id"       : 1,
        "billNumber": 1,
        "prdId": 
        [
            {
                "_id"           : 1 ,
                "productName"   : "Nhà Giả Kim",
                "type"          : "Tiểu thuyết" ,   
                "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg"
            },
        ],
        "quantity":[1]
    } ,
    {
        "_id" : 2 ,
        "billNumber": 2,
        "prdId": [
            {
                "_id"           : 2 ,
                "productName"   : "Harry Potter và Hòn đá Phù thủy",
                "type"          : "Tiểu thuyết" ,
                "description"   : " tiểu thuyết kỳ ảo của văn sĩ người Anh J. K. Rowling. ",
                "PrdImage"      : "https://upload.wikimedia.org/wikipedia/vi/5/51/Harry_Potter_v%C3%A0_H%C3%B2n_%C4%91%C3%A1_ph%C3%B9_th%E1%BB%A7y_b%C3%ACa_2003.jpeg"
            },
            {
                "_id"           : 7 ,
                "productName"   : "Why We Sleep",
                "type"          : 2 ,   
                "description"   : "Sức mạnh kì diệu của giấc ngủ",
                "PrdImage"      : "https://upload.wikimedia.org/wikipedia/en/9/94/Why_We_Sleep_book_cover.png"
            },
        ],
        "quantity": [
        2,
        3,
        ]
    }
]
const giohangInput = 
[
    {
        "_id"       : 1 ,
        "UID"       : 3 ,
        "prdId"     :
        [
            
        ] ,
        "quantity"  : [3,4,5] ,   
    },
    {
        "_id"       : 2 ,
        "UID"       : 4 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
    {
        "_id"       : 3 ,
        "UID"       : 5 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
    {
        "_id"       : 4 ,
        "UID"       : 6 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
]
//Next Number
const BangTruyVan = 
[
    {
        "_id"           : 0 ,
        "account"       : 8 ,
        "sanpham"       : 29 ,
        "hoadon"        : 0 ,
        "chitiet"       : 0 ,
        "giohang"       : 0 ,
    }
]

module.exports = {
    role    : roleInput ,
    account : accountInput ,
    sanpham : sanphamInput ,
    type    : TypeProductInput ,
    hoadon  : hoadonInput  ,
    chitiet : chitietInput ,
    giohang : giohangInput ,
    truyvan : BangTruyVan  
}