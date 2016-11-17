<?xml version="1.0" encoding="UTF-8"?>
<%@ page language="java" contentType="application/xml"
    pageEncoding="EUC-KR"%>
<%
int p1 = Integer.parseInt(request.getParameter("p1"));
int p2 = Integer.parseInt(request.getParameter("p2"));
int result = p1 + p2;
%>
<data>
	<p1><%=p1%></p1>
	<p2><%=p2%></p2>
	<result><%=result%></result>
</data>