package ctrl.util;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import system.Config;

public class ServletCtrl {
	public static void outJson(HttpServletResponse response, JSONObject returnJson) throws IOException {
		response.setCharacterEncoding(Config.ENCODING);
		response.setContentType(Config.CONTENTTYPE);
		PrintWriter out = response.getWriter();
		
		out.println(returnJson.toJSONString());
	}
}
