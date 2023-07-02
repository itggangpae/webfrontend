<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	response.setContentType("text/event-stream");
	response.setCharacterEncoding("UTF-8");

	java.util.Random r = new java.util.Random();
	out.write("data: " + (r.nextInt(46) + 1) + "\n\n");
	Thread.sleep(5000);
%>