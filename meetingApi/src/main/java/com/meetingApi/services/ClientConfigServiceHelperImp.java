package com.meetingApi.services;
/**
* BigBlueButton open source conferencing system - http://www.bigbluebutton.org/
*
* Copyright (c) 2012 BigBlueButton Inc. and by respective authors (see below).
*
* This program is free software; you can redistribute it and/or modify it under the
* terms of the GNU Lesser General Public License as published by the Free Software
* Foundation; either version 3.0 of the License, or (at your option) any later
* version.
*
* BigBlueButton is distributed in the hope that it will be useful, but WITHOUT ANY
* WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
* PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public License along
* with BigBlueButton; if not, see <http://www.gnu.org/licenses/>.
*
*/

import org.bigbluebutton.api.IClientConfigServiceHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ClientConfigServiceHelperImp implements IClientConfigServiceHelper {
	private static Logger log = LoggerFactory.getLogger(ClientConfigServiceHelperImp.class);

		
	public Map<String, String> getPreBuiltConfigs(String dir) {
		Map<String, String> configs = new HashMap<String, String>();
		try {
		File confDir = new File(dir);
		if (confDir.isDirectory()) {
			File[] files = confDir.listFiles();
			for (int i = 0; i < files.length; i++) {
				if (! files[i].isDirectory()) {
					File file = files[i];
					try {
						Scanner myReader = new Scanner(file);
						String text = "";
						while (myReader.hasNextLine()) {
							String line = myReader.nextLine();
							text = text + line;
						}
						configs.put(file.getName(), text);
					} catch (FileNotFoundException e) {
						System.out.println("An error occurred.");
						e.printStackTrace();
				  }
				}
			}		
		}
	} catch(Exception e) {
		System.out.println(e);
	}
		return configs;
	}
	
}
