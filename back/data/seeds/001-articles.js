exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("articles")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("articles").insert([
        {
          articleId: 1,
          date: "03/05/2021",
          title: "titre1",
          subTitle: "sous titre",
          body:
            "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.",
          author: "baptiste seux",
        },
        {
          articleId: 2,
          date: "03/05/2021",
          title: "titre2",
          subTitle: "sous titre",
          body:
            "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.",
          author: "baptiste seux",
        },
      ]);
    });
};
