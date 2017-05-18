package com.symbols;

//import Articulos.*;
import com.nhefner.main.Stock;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import herramientas.clsConexion;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.sql.CallableStatement;
import java.sql.SQLWarning;
import java.sql.Timestamp;
import java.sql.Types;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
//import javax.servlet.http.HttpSession;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.util.JRLoader;

public class clsSymbols {

    private clsConexion varClsConexion;
    private final String varNombreEsquema;
    private final String varNombreTabla;

    public clsSymbols() {
        varClsConexion = new clsConexion();
        varNombreEsquema = "toroso";
        varNombreTabla = "symbolHystory";
    }

    public JSONObject metGetLista() {
        JSONObject varJsonObjectP = new JSONObject();
        JSONArray varJsonArrayP = new JSONArray();
        JSONObject varJsonObjectResultado = new JSONObject();
        try {
            String varSql = "SELECT "
                    + "LPAD(ART.idu_articulo,4,'0') as idu_articulo,"
                    + "ART.des_articulo,"
                    + "ART.des_modelo,"
                    + "ART.num_precio,"
                    + "ART.num_existencia "
                    + " FROM " + varNombreEsquema + ".tbl_articulos ART WHERE ART.opc_estatus = true "
                    + " ORDER BY ART.idu_articulo "
                    + ";";

            PreparedStatement varPst = varClsConexion.getConexion().prepareStatement(varSql);

            ResultSet varResultado = varPst.executeQuery();

            while (varResultado.next()) {
                varJsonObjectP.put("ArcClaveArticulo", varResultado.getString("idu_articulo"));
                varJsonObjectP.put("ArcDescripcion", varResultado.getString("des_articulo"));
                varJsonObjectP.put("ArcModelo", varResultado.getString("des_modelo"));
                varJsonObjectP.put("ArcPrecio", varResultado.getString("num_precio"));
                varJsonObjectP.put("ArcExistencia", varResultado.getString("num_existencia"));              
                varJsonArrayP.add(varJsonObjectP);
            }
            varResultado.close();
            varResultado = null;
            varPst.close();
            varPst = null;
            varClsConexion.closeConexion();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print(e);
        }
        varJsonObjectResultado.put("Result", "OK");
        varJsonObjectResultado.put("Records", varJsonArrayP);
        return varJsonObjectResultado;
    }

   
    public JSONObject metEditar(
            String idu_articulo,
            String des_articulo,
            String des_modelo,
            String num_precio,
            String num_existencia) {

        JSONObject varJsonObjectResultado = new JSONObject();

        try {

            String sql = "UPDATE " + varNombreEsquema + "." + varNombreTabla + " "
                    + "SET  "
                    + "des_articulo = ? , "
                    + "des_modelo = ? , "
                    + "num_precio = ? , "
                    + "num_existencia = ? , "
                    + "opc_estatus = true "
                    + "WHERE idu_articulo = ? ";

            PreparedStatement varPst = varClsConexion.getConexion().prepareStatement(sql);

            varPst.setString(1, des_articulo);
            varPst.setString(2, des_modelo);
            varPst.setFloat(3, Float.parseFloat(num_precio));
            varPst.setLong(4, Long.parseLong(num_existencia));
            varPst.setLong(5,  Long.parseLong(idu_articulo));

            varPst.executeUpdate();

            varJsonObjectResultado.put("Result", "OK");
            varPst.close();
            varPst = null;

            varClsConexion.closeConexion();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print(e);
        }
        return varJsonObjectResultado;
    }

    public JSONObject metQuitar(String CexId) {
        JSONObject varJsonObjectResultado = new JSONObject();
        try {
            String sql = "DELETE FROM "+varNombreEsquema+".tbl_articulos\n"
                    + "WHERE idu_articulo=?;";

            PreparedStatement varPst = varClsConexion.getConexion().prepareStatement(sql);
            varPst.setLong(1, Long.parseLong(CexId));
            
            varPst.executeUpdate();

            varJsonObjectResultado.put("Result", "OK");
            varPst.close();
            varPst = null;
            varClsConexion.closeConexion();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print(e);
        }
        return varJsonObjectResultado;
    }

    public JSONObject metAgregarSymbolHystory(Stock  pStock) {
        JSONObject varJsonObjectResultado = new JSONObject();
        
        String sCompra = "";
        String sVenta = "";
        CallableStatement varPst = null;

        try {
            String sql = "CALL genInsertarSymbolHystory(?,?,?,?,?,?,?,?,?,?);"; //Agrega symbol hystory
            
            varPst = varClsConexion.getConexion().prepareCall(sql);
            
            //PreparedStatement varPst = varClsConexion.getConexion().prepareStatement(sql);
            varPst.setString(1,  pStock.getSymbol().trim());
            varPst.setString(2,  pStock.getName().trim());
            varPst.setDouble(3,  pStock.getPrice());
            varPst.setDouble(4,  pStock.getDaylow());
            varPst.setDouble(5,  pStock.getDayhigh());
            varPst.setLong(6,  pStock.getVolume());
            varPst.setDouble(7,  pStock.getChange());
            varPst.setTimestamp(8, convertStringToTimestamp(pStock.getLastDateTrader()) );
            
            varPst.registerOutParameter("vCompraSuperaResistencia", Types.VARCHAR);
            varPst.registerOutParameter("vVentaSuperaSoporte", Types.VARCHAR);

            
        //varPst.setLong(2, Long.parseLong(sIduVenta));
        //varPst.setLong(3, Long.parseLong(sIduVenta));
                       
            varPst.execute();
            
            
            SQLWarning warning = varPst.getWarnings();
            sCompra = varPst.getString("vCompraSuperaResistencia")==null?"":varPst.getString("vCompraSuperaResistencia");
            sVenta = varPst.getString("vVentaSuperaSoporte")==null?"":varPst.getString("vVentaSuperaSoporte");

            /*if (error != null && error.compareTo("") != 0) {
                if (warning != null && warning.toString().compareTo("") != 0) {
                    System.out.println("Ocurrio una advertencia en la clase ValedineroColocadorasFacade, metodo ventaCarteraMensualAplicar, causado por " + warning.toString());
                }
                throw new Exception(error);
            }*/

            varJsonObjectResultado.put("mensajeCompra", sCompra);
            varJsonObjectResultado.put("mensajeVenta", sVenta);
            
            
            varPst.close();
            varPst = null;
            varClsConexion.closeConexion();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print(e);
        }
        return varJsonObjectResultado;
    }
    
    public static Timestamp convertStringToTimestamp(String str_date) {
    try {
        DateFormat formatter;
      formatter = new SimpleDateFormat("MM/dd/yyyy");
       // you can change format of date
      Date date = formatter.parse(str_date);
      java.sql.Timestamp timeStampDate = new Timestamp(date.getTime());

      return timeStampDate;
    } catch (ParseException e) {
      System.out.println("Exception :" + e);
      return null;
    }
  }
     
    public JSONArray generarFolioClaveArticulo(String criterio) {
        JSONObject varJsonObjectP = new JSONObject();
        JSONArray varJsonArrayP = new JSONArray();
        JSONObject varJsonObjectResultado = new JSONObject();
        try {
            
            String varSql = "CALL genInsertarSymbolHystory(' ', ' ', 0, 0) as ident ";                   

            PreparedStatement varPst = varClsConexion.getConexion().prepareStatement(varSql);

            ResultSet varResultado = varPst.executeQuery();

            while (varResultado.next()) {
                varJsonObjectP.put("cve_articulo", varResultado.getString("ident")); 
                varJsonArrayP.add(varJsonObjectP);
            }
            varResultado.close();
            varResultado = null;
            varPst.close();
            varPst = null;
            varClsConexion.closeConexion();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print(e);
        }
        return varJsonArrayP;
    }

}