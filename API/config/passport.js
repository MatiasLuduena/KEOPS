import { Strategy, ExtractJwt } from "passport-jwt";

import Usuarios from "../modelos/UsuariosModelo.js";
import { keys } from "./key.js";

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

const passport = (passport) => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            Usuarios.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err))
            ;
        })
    );
};

export default passport;