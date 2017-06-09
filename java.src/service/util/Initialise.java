package service.util;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import ctrl.module.PolicyCtrl;
import ctrl.util.ServletCtrl;
import system.Config;
import system.Key;
import system.Value;

public class Initialise extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Initialise() {
        super();
    }

	@SuppressWarnings("unchecked")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding(Config.ENCODING);
		JSONObject returnJson = new JSONObject();
		
		try {
			returnJson = PolicyCtrl.initialise();
		} catch(Exception e) {
			e.printStackTrace();
			returnJson.put(Key.STATUS, Value.EXCEPTION);
			returnJson.put(Key.EXCEPTION, e.getMessage());
		}
		

		ServletCtrl.outJson(response, returnJson);
	}

}
