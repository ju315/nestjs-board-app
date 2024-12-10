import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }

  getBoardById(id: string): Board {
    const target = this.boards.find((board) => board.id === id);

    if (!target) {
      throw new NotFoundException(`Can not found board with id ${id}`);
    }

    return target;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
