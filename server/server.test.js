import { test } from 'vitest';
import supertest from 'supertest';
import app from './server'; 

test('should update a player’s data', async () => {
    const id = 1; 
    const updatedData = {
      nickname: 'Beyza',
      score: 5000,
    };
  
    const response = await supertest(app)
      .put(`/${id}`)
      .send(updatedData)
      .expect(200);  

    assert.equal(response.body.status, 'success', 'Should return success status');
    assert.equal(response.body.message, 'Player updated!', 'Should return correct message');
    assert.equal(response.body.data.nickname, updatedData.nickname, 'Nickname should be updated');
    assert.equal(response.body.data.score, updatedData.score, 'Score should be updated');
  });
  