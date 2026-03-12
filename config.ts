import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("cef_m");

config.google_drive.sheets_folders = [
  { id: "1hAotIKkBpCXSw8wN8FA9SO49AJ5CVSEQ", name: "cef_m sheets" }

];

config.google_drive.assets_folders = [
  {id: "1CgsUj01BgDQrgVyocU2D-cQsOBmMvhrf", name: "cef_m assets"}
];


config.git = {
  content_repo: "https://github.com/IDEMSInternational/cef_m.git",
  content_tag_latest: "0.0.4",
};


config.app_config.APP_SIDEMENU_DEFAULTS.title = "cef_m";
config.app_config.APP_HEADER_DEFAULTS.title = "cef_m";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from cef_m";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from cef_m";

config.error_logging = { dsn: "https://654b9cde1c844695ad6078348a83a65f@app.glitchtip.com/6368"};

export default config;
