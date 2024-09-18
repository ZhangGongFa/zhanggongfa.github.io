<?php
    $str = "<!DOCTYPE html>
            <html>
            <head>
            <title>Page Title</title>
            <style>
                table, th, tr, td {
                    border: 1px solid;
                }
            </style>
            </head>
            <body>

            <table>
                <thead>
                    <tr>
                        <th>MSSV</th>
                        <th>Họ và Tên</th>
                        <th>Năm Sinh</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>";

    // Thông tin sinh viên
    $sv1 = array("mssv" => "012345", "hoTen" => "Lê Thị Tươi", "namSinh" => 2002, "avatar" => "https://minhducpc.vn/uploads/images/hinh-cute01.png");
    $sv2 = array("mssv" => "014245", "hoTen" => "Bành Văn Bưởi", "namSinh" => 2003, "avatar" => "https://minhducpc.vn/uploads/images/hinh-cute01.png");
    $sv3 = array("mssv" => "014454", "hoTen" => "La Hảo Hán", "namSinh" => 2001, "avatar" => "https://minhducpc.vn/uploads/images/hinh-cute01.png");
    $sv4 = array("mssv" => "112334", "hoTen" => "Mạc Văn Hết", "namSinh" => 2002, "avatar" => "https://minhducpc.vn/uploads/images/hinh-cute01.png");

    $lop = array($sv1, $sv2, $sv3, $sv4);

    // Tạo các hàng cho bảng
    $rows = "";
    foreach($lop as $sv){
        $rows .= "<tr><td>".$sv["mssv"]."</td><td>".$sv["hoTen"]."</td><td>".$sv["namSinh"]."</td><td><img src='".$sv["avatar"]."' alt='".$sv["hoTen"]."' width='100'></td></tr>";
    }

    $str .= $rows . "</tbody></table></body></html>";

    // Xuất nội dung HTML
    echo $str;
?>
