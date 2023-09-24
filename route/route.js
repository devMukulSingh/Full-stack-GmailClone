import express from "express";
import { getEmails, saveSentEmail ,moveToBin , toggleStarredEmail ,deleteMails} from "../controller/emailController.js";

const routes = express.Router();

routes.post( "/save", saveSentEmail);
routes.post( "/save-drafts", saveSentEmail);
routes.get( "/emails/:type", getEmails);
routes.post( "/bin", moveToBin);
routes.post( "/starred", toggleStarredEmail);
routes.delete( "/delete", deleteMails);

export default routes;