import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Tüm Todo öğelerini listele
      try {
        const todos = await prisma.todo.findMany();
        return res.status(200).json(todos);
      } catch (error) {
        console.error(
          "Error fetching todos:",
          error instanceof Error ? error.message : error
        );
        return res
          .status(500)
          .json({ message: "Veriler alınırken bir hata oluştu." });
      }

    case "POST":
      // Yeni bir Todo öğesi oluştur
      const { title, description } = req.body;

      if (!title) {
        return res.status(400).json({ message: "Title gereklidir." });
      }

      try {
        const newTodo = await prisma.todo.create({
          data: { title, description },
        });
        return res.status(201).json(newTodo);
      } catch (error) {
        console.error("Error creating todo:", error);
        return res
          .status(500)
          .json({ message: "Todo oluşturulurken bir hata oluştu." });
      }

    case "PUT":
      // Var olan bir Todo öğesini güncelle
      const { id, title: updateTitle, completed } = req.body;

      if (!id || !updateTitle) {
        return res.status(400).json({ message: "ID ve Title gereklidir." });
      }

      try {
        const updatedTodo = await prisma.todo.update({
          where: { id },
          data: { title: updateTitle, completed },
        });
        return res.status(200).json(updatedTodo);
      } catch (error) {
        console.error("Error updating todo:", error);
        return res
          .status(500)
          .json({ message: "Todo güncellenirken bir hata oluştu." });
      }

    case "DELETE":
      // Var olan bir Todo öğesini sil
      const { id: deleteId } = req.query;

      if (!deleteId) {
        return res.status(400).json({ message: "ID gereklidir." });
      }

      try {
        const deletedTodo = await prisma.todo.delete({
          where: { id: deleteId },
        });
        return res.status(200).json(deletedTodo);
      } catch (error) {
        console.error("Error deleting todo:", error);
        return res
          .status(500)
          .json({ message: "Todo silinirken bir hata oluştu." });
      }

    default:
      // Desteklenmeyen HTTP metodları
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
