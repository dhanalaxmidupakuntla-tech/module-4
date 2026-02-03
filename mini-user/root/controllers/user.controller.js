import bcrypt from "bcryptjs";
import {supabase} from "../config/supabaseClient.js";

export const registerUser = async (req, res) => {
    try {
        const {name, email, age, location, password} = req.body;

        if(!name || !email || !age || !location || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const {data: existing} = await supabase
            .from("app_users")
            .select("*")
            .eq("email", email)
            .single();

        if(existing) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const {error} = await supabase
            .from("app_users")
            .insert([{ name, email, age, location, password: hashedPassword }]);
        
        if(error) throw error;

        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const myProfile = async (req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            return res.status(400).json({ message: "Name query parameter is required" });
        }

        const {data, error} = await supabase
            .from("app_users")
            .select("name, email, age, location")
            .eq("name", name)
            .single();

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        if(error) throw error;

        res.status(200).json({ profile: data });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};