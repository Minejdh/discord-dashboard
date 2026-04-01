import { Router } from "express";
import { botManager } from "../services/botManager";

const router = Router();

router.post("/:id/start", async (req,res)=>{
  await botManager.startBot({_id:req.params.id, token:req.body.token, name:"Manual"});
  res.json({status:"started"});
});

router.post("/:id/stop", async (req,res)=>{
  await botManager.stopBot(req.params.id);
  res.json({status:"stopped"});
});

export default router;