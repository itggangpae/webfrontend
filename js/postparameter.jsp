<%@ page language="java" contentType="text/json; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%
	System.out.println("name:" + request.getParameter("name"));
	String[] values = request.getParameterValues("sports");
	if (values != null) {
		if(values.length != 0){
			for (int i = 0; i < values.length; i++) {
				System.out.println(values[i]);
			}
		}else{
			System.out.println("데이터 없음");
		}
	}
	out.println("result:success");
%>