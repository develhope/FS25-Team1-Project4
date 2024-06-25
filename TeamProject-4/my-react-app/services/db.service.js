import pgPromise from 'pg-promise';

const db = pgPromise()('postgresql://users_owner:IZwrn1bTBU3K@ep-shrill-lake-a2h9f28b.eu-central-1.aws.neon.tech/users?sslmode=require');

export { db };