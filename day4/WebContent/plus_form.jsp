<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
int p1 = Integer.parseInt(request.getParameter("p1"));
int p2 = Integer.parseInt(request.getParameter("p2"));
int result = p1 + p2;
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
    <form action="./plus_form.jsp" method="get">
        <input type="text" id="p1" name="p1" value="<%=p1%>">+
        <input type="text" id="p2" name="p2" value="<%=p2%>">
        <input type="submit" value="=" id="exe">
        <input type="text" id="result"  value="<%=result%>">
    </form>
</body>
</html>