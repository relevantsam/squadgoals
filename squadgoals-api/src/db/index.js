import { Pool } from 'pg';

export class DbService { 
    constructor() {
        this.pool = new Pool();
    }

    setup() {
        const createTableText = `
            CREATE EXTENSION IF NOT EXISTS "pgcrypto";

            CREATE TABLE IF NOT EXISTS Players (
                id VARCHAR(36) PRIMARY KEY,
                name VARCHAR(50)
            );

            CREATE TABLE IF NOT EXISTS Games (
                id VARCHAR(36) PRIMARY KEY,
                data JSONB
            );

            CREATE TABLE IF NOT EXISTS PlayersGames (
                players_id VARCHAR(36) REFERENCES Players,
                games_id VARCHAR(36) REFERENCES Games,
                PRIMARY KEY(players_id, games_id)
            );
        `;
        this.query(createTableText);
    }

    query(text, params) {
        try {
            return this.pool.query(text, params);
        } catch (e) {
            throw e;
        }
    }
}