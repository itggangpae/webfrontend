<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "com.oreilly.servlet.MultipartRequest,com.oreilly.servlet.multipart.DefaultFileRenamePolicy " %>
<%
try {
	request.setCharacterEncoding("utf-8");
	String uploadPath = request.getServletContext().getRealPath("/html5");
	System.out.println(uploadPath);
	MultipartRequest multi = new MultipartRequest(request, uploadPath, 1024*1024, "utf-8",
			new DefaultFileRenamePolicy());
	
	String name= multi.getParameter("name");
	String email= multi.getParameter("email");
	String age= multi.getParameter("age");
	System.out.println(name);
	String output = String.format("이름:%s 이메일:%s 나이:%s", name, email, age);
	out.println(output);

} catch (Exception e) {
	System.out.println("파일 업로드 처리 실패:" + e.getMessage());
}

	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>