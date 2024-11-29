import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
    try {
        await mongoose.connect('mongodb+srv://antopolis:raTn5g1qAeU5b967@level-2.suciuav.mongodb.net/antopolis?retryWrites=true&w=majority&appName=Level-2');

        app.listen(config.port, () => {
            console.log(`app is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();