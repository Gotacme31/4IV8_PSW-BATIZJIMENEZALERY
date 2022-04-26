<%-- 
    Document   : consultaralumno
    Created on : 5/04/2022, 03:12:14 AM
    Author     : aly
--%>

<%@page import="java.sql.*"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       
        <link rel="stylesheet" href="CSS/style1.css">
    </head>
    <body style="background-image: url(Fotos/otro.jpg);">
        <div align="center" class="uno" >
            <h1>CONSULTA</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>Boleta</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Telefono</th>
                    <th>Editar</th>
                    
                </tr>
            </thead>
            <tbody>
        <%
        //Aquí ya puedo incorporar java
        Connection con = null;
        Statement set = null;
        ResultSet rs = null;
        
        String username, url, password, driver;
        
        url = "jdbc:mysql://localhost/alumnos";
        username = "root";
        password = "alery050831";
        //password= "n0m3l0";
        
        driver = "com.mysql.jdbc.Driver";
        
        try{
            //Conectarnos
            Class.forName(driver);
            con = DriverManager.getConnection(url, username, password);
            
            try{
                String q = "select * from alumnosbatiz order by boleta asc";
                
                set = con.createStatement();
                
                rs = set.executeQuery(q);
                
                while(rs.next()){
                
                %>
                <tr>
                    <td><%=rs.getInt("boleta")%></td>
                    <td><%=rs.getString("nombre")%></td>
                    <td><%=rs.getString("appat")%></td>
                    <td><%=rs.getString("apmat")%></td>
                    <td><%=rs.getString("telefono")%></td>
                    <td><a href="editaralumno.jsp?id=<%=rs.getInt("boleta")%>" >Editar</a></td>
                    
                </tr>
                </div>
                <%
                }
            }catch(SQLException es){
                
                System.out.println("Error al registrar en la tabla");
                System.out.println(es.getMessage());

                %>
                <h1>NO se puede consultar la tabla</h1>
                <%
            }
        }catch(Exception e){

            System.out.println("Error al conectar la BD");
            System.out.println(e.getMessage());

            %>
            <h1>No se conectó con la BD T_T</h1>
            <%
        }
        %>
            </tbody>
            </table>
        <a href="index.html">Regresar a Principal</a>
        <br>
    </body>
</html>